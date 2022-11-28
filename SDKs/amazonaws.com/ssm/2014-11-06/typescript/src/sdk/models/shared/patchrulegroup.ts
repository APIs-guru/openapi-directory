import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchRule } from "./patchrule";



// PatchRuleGroup
/** 
 * A set of rules defining the approval rules for a patch baseline.
**/
export class PatchRuleGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PatchRules", elemType: PatchRule })
  patchRules: PatchRule[];
}
