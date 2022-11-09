import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricValue
/** 
 * A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
**/
export class MetricValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=variance" })
  variance?: string;
}
