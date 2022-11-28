import { SpeakeasyBase } from "../../../internal/utils";
import { PatchRuleGroup } from "./patchrulegroup";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { PatchActionEnum } from "./patchactionenum";
import { PatchSource } from "./patchsource";
/**
 * Defines the basic information about a patch baseline override.
**/
export declare class BaselineOverride extends SpeakeasyBase {
    approvalRules?: PatchRuleGroup;
    approvedPatches?: string[];
    approvedPatchesComplianceLevel?: PatchComplianceLevelEnum;
    approvedPatchesEnableNonSecurity?: boolean;
    globalFilters?: PatchFilterGroup;
    operatingSystem?: OperatingSystemEnum;
    rejectedPatches?: string[];
    rejectedPatchesAction?: PatchActionEnum;
    sources?: PatchSource[];
}
