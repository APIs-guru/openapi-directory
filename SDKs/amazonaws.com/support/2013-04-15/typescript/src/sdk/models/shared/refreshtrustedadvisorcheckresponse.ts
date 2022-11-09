import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrustedAdvisorCheckRefreshStatus } from "./trustedadvisorcheckrefreshstatus";


// RefreshTrustedAdvisorCheckResponse
/** 
 * The current refresh status of a Trusted Advisor check.
**/
export class RefreshTrustedAdvisorCheckResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: TrustedAdvisorCheckRefreshStatus;
}
