import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used by each unique eBay marketplace and compliance type combination that is returned in the getListingViolationsSummary response to indicate the total number of listing violations in regards to that eBay marketplace and compliance type.
**/
export declare class ComplianceSummaryInfo extends SpeakeasyBase {
    complianceType?: string;
    listingCount?: number;
    marketplaceId?: string;
}
