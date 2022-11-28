import { SpeakeasyBase } from "../../../internal/utils";
import { PatchRuleGroup } from "./patchrulegroup";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { PatchActionEnum } from "./patchactionenum";
import { PatchSource } from "./patchsource";
import { Tag } from "./tag";
export declare class CreatePatchBaselineRequest extends SpeakeasyBase {
    approvalRules?: PatchRuleGroup;
    approvedPatches?: string[];
    approvedPatchesComplianceLevel?: PatchComplianceLevelEnum;
    approvedPatchesEnableNonSecurity?: boolean;
    clientToken?: string;
    description?: string;
    globalFilters?: PatchFilterGroup;
    name: string;
    operatingSystem?: OperatingSystemEnum;
    rejectedPatches?: string[];
    rejectedPatchesAction?: PatchActionEnum;
    sources?: PatchSource[];
    tags?: Tag[];
}
