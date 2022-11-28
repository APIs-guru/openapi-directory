import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMetricSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetricSetArn" })
  metricSetArn?: string;
}
