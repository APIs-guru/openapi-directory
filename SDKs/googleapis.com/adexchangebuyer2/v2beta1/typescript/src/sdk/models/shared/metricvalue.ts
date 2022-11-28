import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricValue
/** 
 * A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
**/
export class MetricValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=variance" })
  variance?: string;
}
