import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricKeyDataPoints } from "./metrickeydatapoints";



export class GetResourceMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlignedEndTime" })
  alignedEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=AlignedStartTime" })
  alignedStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricList", elemType: MetricKeyDataPoints })
  metricList?: MetricKeyDataPoints[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
