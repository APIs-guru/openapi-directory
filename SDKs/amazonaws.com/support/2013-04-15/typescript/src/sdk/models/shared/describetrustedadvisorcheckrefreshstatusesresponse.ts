import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrustedAdvisorCheckRefreshStatus } from "./trustedadvisorcheckrefreshstatus";


// DescribeTrustedAdvisorCheckRefreshStatusesResponse
/** 
 * The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.
**/
export class DescribeTrustedAdvisorCheckRefreshStatusesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=statuses", elemType: shared.TrustedAdvisorCheckRefreshStatus })
  statuses: TrustedAdvisorCheckRefreshStatus[];
}
