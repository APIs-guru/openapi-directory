import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustedAdvisorCheckDescription } from "./trustedadvisorcheckdescription";



// DescribeTrustedAdvisorChecksResponse
/** 
 * Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.
**/
export class DescribeTrustedAdvisorChecksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checks", elemType: TrustedAdvisorCheckDescription })
  checks: TrustedAdvisorCheckDescription[];
}
