import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Recommendation } from "./recommendation";



// Remediation
/** 
 * Details about the remediation steps for a finding.
**/
export class Remediation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Recommendation" })
  recommendation?: Recommendation;
}
