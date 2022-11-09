import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricValue
/** 
 * The value of a metric.
**/
export class MetricValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
