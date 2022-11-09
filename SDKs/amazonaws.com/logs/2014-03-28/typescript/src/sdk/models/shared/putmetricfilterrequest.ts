import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricTransformation } from "./metrictransformation";


export class PutMetricFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filterName" })
  filterName: string;

  @Metadata({ data: "json, name=filterPattern" })
  filterPattern: string;

  @Metadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @Metadata({ data: "json, name=metricTransformations", elemType: shared.MetricTransformation })
  metricTransformations: MetricTransformation[];
}
