import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricTransformation } from "./metrictransformation";



export class PutMetricFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filterName" })
  filterName: string;

  @SpeakeasyMetadata({ data: "json, name=filterPattern" })
  filterPattern: string;

  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=metricTransformations", elemType: MetricTransformation })
  metricTransformations: MetricTransformation[];
}
