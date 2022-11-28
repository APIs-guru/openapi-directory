import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompliantSummary } from "./compliantsummary";
import { NonCompliantSummary } from "./noncompliantsummary";



// ComplianceSummaryItem
/** 
 * A summary of compliance information by compliance type.
**/
export class ComplianceSummaryItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceType" })
  complianceType?: string;

  @SpeakeasyMetadata({ data: "json, name=CompliantSummary" })
  compliantSummary?: CompliantSummary;

  @SpeakeasyMetadata({ data: "json, name=NonCompliantSummary" })
  nonCompliantSummary?: NonCompliantSummary;
}
