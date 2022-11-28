import { SpeakeasyBase } from "../../../internal/utils";
import { PatchRule } from "./patchrule";
/**
 * A set of rules defining the approval rules for a patch baseline.
**/
export declare class PatchRuleGroup extends SpeakeasyBase {
    patchRules: PatchRule[];
}
