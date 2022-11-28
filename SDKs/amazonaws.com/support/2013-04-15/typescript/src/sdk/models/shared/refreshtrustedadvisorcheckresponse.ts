import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustedAdvisorCheckRefreshStatus } from "./trustedadvisorcheckrefreshstatus";



// RefreshTrustedAdvisorCheckResponse
/** 
 * The current refresh status of a Trusted Advisor check.
**/
export class RefreshTrustedAdvisorCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: TrustedAdvisorCheckRefreshStatus;
}
