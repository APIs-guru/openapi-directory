import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ComplianceSummaryInfo } from "./compliancesummaryinfo";


// ComplianceSummary
/** 
 * This type is the base type for the getListingViolationsSummary response. The violationSummaries container contains an array of policy violation counts for each unique eBay marketplace and compliance type violation.
**/
export class ComplianceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=violationSummaries", elemType: shared.ComplianceSummaryInfo })
  violationSummaries?: ComplianceSummaryInfo[];
}
