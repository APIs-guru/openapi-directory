import { SpeakeasyBase } from "../../../internal/utils";
import { TrustedAdvisorCategorySpecificSummary } from "./trustedadvisorcategoryspecificsummary";
import { TrustedAdvisorResourcesSummary } from "./trustedadvisorresourcessummary";
/**
 * A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.
**/
export declare class TrustedAdvisorCheckSummary extends SpeakeasyBase {
    categorySpecificSummary: TrustedAdvisorCategorySpecificSummary;
    checkId: string;
    hasFlaggedResources?: boolean;
    resourcesSummary: TrustedAdvisorResourcesSummary;
    status: string;
    timestamp: string;
}
