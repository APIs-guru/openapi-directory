import { SpeakeasyBase } from "../../../internal/utils";
import { PatchRuleGroup } from "./patchrulegroup";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";
import { PatchActionEnum } from "./patchactionenum";
import { PatchSource } from "./patchsource";
export declare class UpdatePatchBaselineRequest extends SpeakeasyBase {
    approvalRules?: PatchRuleGroup;
    approvedPatches?: string[];
    approvedPatchesComplianceLevel?: PatchComplianceLevelEnum;
    approvedPatchesEnableNonSecurity?: boolean;
    baselineId: string;
    description?: string;
    globalFilters?: PatchFilterGroup;
    name?: string;
    rejectedPatches?: string[];
    rejectedPatchesAction?: PatchActionEnum;
    replace?: boolean;
    sources?: PatchSource[];
}
