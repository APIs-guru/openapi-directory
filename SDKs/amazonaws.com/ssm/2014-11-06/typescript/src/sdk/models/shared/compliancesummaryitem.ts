import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompliantSummary } from "./compliantsummary";
import { NonCompliantSummary } from "./noncompliantsummary";


// ComplianceSummaryItem
/** 
 * A summary of compliance information by compliance type.
**/
export class ComplianceSummaryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceType" })
  complianceType?: string;

  @Metadata({ data: "json, name=CompliantSummary" })
  compliantSummary?: CompliantSummary;

  @Metadata({ data: "json, name=NonCompliantSummary" })
  nonCompliantSummary?: NonCompliantSummary;
}
