import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsSsmComplianceSummary } from "./awsssmcompliancesummary";


// AwsSsmPatch
/** 
 * Provides details about the compliance for a patch.
**/
export class AwsSsmPatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComplianceSummary" })
  complianceSummary?: AwsSsmComplianceSummary;
}
