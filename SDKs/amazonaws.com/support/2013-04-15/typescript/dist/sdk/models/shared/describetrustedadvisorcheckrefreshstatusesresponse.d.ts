import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TrustedAdvisorCheckRefreshStatus } from "./trustedadvisorcheckrefreshstatus";
/**
 * The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.
**/
export declare class DescribeTrustedAdvisorCheckRefreshStatusesResponse extends SpeakeasyBase {
    statuses: TrustedAdvisorCheckRefreshStatus[];
}
