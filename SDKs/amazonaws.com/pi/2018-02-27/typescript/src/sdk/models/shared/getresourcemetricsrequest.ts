import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricQuery } from "./metricquery";
import { ServiceTypeEnum } from "./servicetypeenum";


export class GetResourceMetricsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime: Date;

  @Metadata({ data: "json, name=Identifier" })
  identifier: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=MetricQueries", elemType: shared.MetricQuery })
  metricQueries: MetricQuery[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PeriodInSeconds" })
  periodInSeconds?: number;

  @Metadata({ data: "json, name=ServiceType" })
  serviceType: ServiceTypeEnum;

  @Metadata({ data: "json, name=StartTime" })
  startTime: Date;
}
