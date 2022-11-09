import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ApprovalRules" })
  approvalRules?: PatchRuleGroup;

  @Metadata({ data: "json, name=ApprovedPatches" })
  approvedPatches?: string[];

  @Metadata({ data: "json, name=ApprovedPatchesComplianceLevel" })
  approvedPatchesComplianceLevel?: PatchComplianceLevelEnum;

  @Metadata({ data: "json, name=ApprovedPatchesEnableNonSecurity" })
  approvedPatchesEnableNonSecurity?: boolean;

  @Metadata({ data: "json, name=GlobalFilters" })
  globalFilters?: PatchFilterGroup;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @Metadata({ data: "json, name=RejectedPatches" })
  rejectedPatches?: string[];

  @Metadata({ data: "json, name=RejectedPatchesAction" })
  rejectedPatchesAction?: PatchActionEnum;

  @Metadata({ data: "json, name=Sources", elemType: shared.PatchSource })
  sources?: PatchSource[];
}
