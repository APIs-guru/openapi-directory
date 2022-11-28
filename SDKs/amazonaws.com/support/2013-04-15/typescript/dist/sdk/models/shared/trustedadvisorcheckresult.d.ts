import { SpeakeasyBase } from "../../../internal/utils";
import { TrustedAdvisorCategorySpecificSummary } from "./trustedadvisorcategoryspecificsummary";
import { TrustedAdvisorResourceDetail } from "./trustedadvisorresourcedetail";
import { TrustedAdvisorResourcesSummary } from "./trustedadvisorresourcessummary";
/**
 * The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.
**/
export declare class TrustedAdvisorCheckResult extends SpeakeasyBase {
    categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
    checkId: string;
    flaggedResources: TrustedAdvisorResourceDetail[];
    resourcesSummary: TrustedAdvisorResourcesSummary;
    status: string;
    timestamp: string;
}
