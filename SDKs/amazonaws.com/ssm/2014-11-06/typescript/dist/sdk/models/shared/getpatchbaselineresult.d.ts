import { SpeakeasyBase } from "../../../internal/utils";
import { PatchRuleGroup } from "./patchrulegroup";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { PatchActionEnum } from "./patchactionenum";
import { PatchSource } from "./patchsource";
export declare class GetPatchBaselineResult extends SpeakeasyBase {
    approvalRules?: PatchRuleGroup;
    approvedPatches?: string[];
    approvedPatchesComplianceLevel?: PatchComplianceLevelEnum;
    approvedPatchesEnableNonSecurity?: boolean;
    baselineId?: string;
    createdDate?: Date;
    description?: string;
    globalFilters?: PatchFilterGroup;
    modifiedDate?: Date;
    name?: string;
    operatingSystem?: OperatingSystemEnum;
    patchGroups?: string[];
    rejectedPatches?: string[];
    rejectedPatchesAction?: PatchActionEnum;
    sources?: PatchSource[];
}
