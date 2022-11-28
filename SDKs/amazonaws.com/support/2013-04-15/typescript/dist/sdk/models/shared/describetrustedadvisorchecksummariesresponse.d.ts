import { SpeakeasyBase } from "../../../internal/utils";
import { TrustedAdvisorCheckSummary } from "./trustedadvisorchecksummary";
/**
 * The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.
**/
export declare class DescribeTrustedAdvisorCheckSummariesResponse extends SpeakeasyBase {
    summaries: TrustedAdvisorCheckSummary[];
}
