import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";


// PatchRule
/** 
 * Defines an approval rule for a patch baseline.
**/
export class PatchRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApproveAfterDays" })
  approveAfterDays?: number;

  @Metadata({ data: "json, name=ApproveUntilDate" })
  approveUntilDate?: string;

  @Metadata({ data: "json, name=ComplianceLevel" })
  complianceLevel?: PatchComplianceLevelEnum;

  @Metadata({ data: "json, name=EnableNonSecurity" })
  enableNonSecurity?: boolean;

  @Metadata({ data: "json, name=PatchFilterGroup" })
  patchFilterGroup: PatchFilterGroup;
}
