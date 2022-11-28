import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrustedAdvisorCheckRefreshStatus } from "./trustedadvisorcheckrefreshstatus";



// DescribeTrustedAdvisorCheckRefreshStatusesResponse
/** 
 * The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.
**/
export class DescribeTrustedAdvisorCheckRefreshStatusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statuses", elemType: TrustedAdvisorCheckRefreshStatus })
  statuses: TrustedAdvisorCheckRefreshStatus[];
}
