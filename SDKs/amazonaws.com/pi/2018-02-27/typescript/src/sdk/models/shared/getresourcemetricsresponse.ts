import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricKeyDataPoints } from "./metrickeydatapoints";


export class GetResourceMetricsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlignedEndTime" })
  alignedEndTime?: Date;

  @Metadata({ data: "json, name=AlignedStartTime" })
  alignedStartTime?: Date;

  @Metadata({ data: "json, name=Identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=MetricList", elemType: shared.MetricKeyDataPoints })
  metricList?: MetricKeyDataPoints[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
