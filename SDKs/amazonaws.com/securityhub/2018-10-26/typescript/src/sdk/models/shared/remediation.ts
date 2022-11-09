import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Recommendation } from "./recommendation";


// Remediation
/** 
 * Details about the remediation steps for a finding.
**/
export class Remediation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Recommendation" })
  recommendation?: Recommendation;
}
