import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsSsmComplianceSummary } from "./awsssmcompliancesummary";



// AwsSsmPatch
/** 
 * Provides details about the compliance for a patch.
**/
export class AwsSsmPatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComplianceSummary" })
  complianceSummary?: AwsSsmComplianceSummary;
}
