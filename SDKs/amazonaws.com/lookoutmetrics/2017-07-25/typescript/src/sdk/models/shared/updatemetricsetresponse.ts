import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMetricSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricSetArn" })
  metricSetArn?: string;
}
