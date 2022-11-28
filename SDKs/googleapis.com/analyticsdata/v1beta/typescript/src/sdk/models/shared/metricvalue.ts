import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricValue
/** 
 * The value of a metric.
**/
export class MetricValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
