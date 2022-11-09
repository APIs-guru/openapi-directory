import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMetricSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetricSetArn" })
  metricSetArn?: string;
}
