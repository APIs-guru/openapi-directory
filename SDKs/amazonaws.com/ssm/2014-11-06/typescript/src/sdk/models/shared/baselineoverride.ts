import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchRuleGroup } from "./patchrulegroup";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { PatchActionEnum } from "./patchactionenum";
import { PatchSource } from "./patchsource";



// BaselineOverride
/** 
 * Defines the basic information about a patch baseline override.
**/
export class BaselineOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApprovalRules" })
  approvalRules?: PatchRuleGroup;

  @SpeakeasyMetadata({ data: "json, name=ApprovedPatches" })
  approvedPatches?: string[];

  @SpeakeasyMetadata({ data: "json, name=ApprovedPatchesComplianceLevel" })
  approvedPatchesComplianceLevel?: PatchComplianceLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=ApprovedPatchesEnableNonSecurity" })
  approvedPatchesEnableNonSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=GlobalFilters" })
  globalFilters?: PatchFilterGroup;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=RejectedPatches" })
  rejectedPatches?: string[];

  @SpeakeasyMetadata({ data: "json, name=RejectedPatchesAction" })
  rejectedPatchesAction?: PatchActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Sources", elemType: PatchSource })
  sources?: PatchSource[];
}
