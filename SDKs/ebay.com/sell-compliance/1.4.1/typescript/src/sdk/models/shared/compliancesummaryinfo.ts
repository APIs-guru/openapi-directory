import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ComplianceSummaryInfo
/** 
 * This type is used by each unique eBay marketplace and compliance type combination that is returned in the getListingViolationsSummary response to indicate the total number of listing violations in regards to that eBay marketplace and compliance type.
**/
export class ComplianceSummaryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=complianceType" })
  complianceType?: string;

  @Metadata({ data: "json, name=listingCount" })
  listingCount?: number;

  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;
}
