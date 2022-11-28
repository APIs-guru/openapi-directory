import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceSummaryInfo } from "./compliancesummaryinfo";
/**
 * This type is the base type for the getListingViolationsSummary response. The violationSummaries container contains an array of policy violation counts for each unique eBay marketplace and compliance type violation.
**/
export declare class ComplianceSummary extends SpeakeasyBase {
    violationSummaries?: ComplianceSummaryInfo[];
}
