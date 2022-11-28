import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricQuery } from "./metricquery";
import { ServiceTypeEnum } from "./servicetypeenum";



export class GetResourceMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=MetricQueries", elemType: MetricQuery })
  metricQueries: MetricQuery[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PeriodInSeconds" })
  periodInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=ServiceType" })
  serviceType: ServiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime: Date;
}
