import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrustedAdvisorCheckDescription } from "./trustedadvisorcheckdescription";


// DescribeTrustedAdvisorChecksResponse
/** 
 * Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.
**/
export class DescribeTrustedAdvisorChecksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=checks", elemType: shared.TrustedAdvisorCheckDescription })
  checks: TrustedAdvisorCheckDescription[];
}
