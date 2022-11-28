import { SpeakeasyBase } from "../../../internal/utils";
import { PatchComplianceLevelEnum } from "./patchcompliancelevelenum";
import { PatchFilterGroup } from "./patchfiltergroup";
/**
 * Defines an approval rule for a patch baseline.
**/
export declare class PatchRule extends SpeakeasyBase {
    approveAfterDays?: number;
    approveUntilDate?: string;
    complianceLevel?: PatchComplianceLevelEnum;
    enableNonSecurity?: boolean;
    patchFilterGroup: PatchFilterGroup;
}
