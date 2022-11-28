import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";



// PatchRule
/** 
 * Defines an approval rule for a patch baseline.
**/
export class PatchRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApproveAfterDays" })
  approveAfterDays?: number;

  @SpeakeasyMetadata({ data: "json, name=ApproveUntilDate" })
  approveUntilDate?: string;

  @SpeakeasyMetadata({ data: "json, name=ComplianceLevel" })
  complianceLevel?: PatchComplianceLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=EnableNonSecurity" })
  enableNonSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PatchFilterGroup" })
  patchFilterGroup: PatchFilterGroup;
}
