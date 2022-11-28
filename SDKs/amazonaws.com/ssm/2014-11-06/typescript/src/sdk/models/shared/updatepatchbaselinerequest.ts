import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchRuleGroup } from "./patchrulegroup";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";
import { PatchActionEnum } from "./patchactionenum";
import { PatchSource } from "./patchsource";



export class UpdatePatchBaselineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApprovalRules" })
  approvalRules?: PatchRuleGroup;

  @SpeakeasyMetadata({ data: "json, name=ApprovedPatches" })
  approvedPatches?: string[];

  @SpeakeasyMetadata({ data: "json, name=ApprovedPatchesComplianceLevel" })
  approvedPatchesComplianceLevel?: PatchComplianceLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=ApprovedPatchesEnableNonSecurity" })
  approvedPatchesEnableNonSecurity?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=GlobalFilters" })
  globalFilters?: PatchFilterGroup;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=RejectedPatches" })
  rejectedPatches?: string[];

  @SpeakeasyMetadata({ data: "json, name=RejectedPatchesAction" })
  rejectedPatchesAction?: PatchActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Replace" })
  replace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Sources", elemType: PatchSource })
  sources?: PatchSource[];
}
