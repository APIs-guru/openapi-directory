import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatchRule } from "./patchrule";


// PatchRuleGroup
/** 
 * A set of rules defining the approval rules for a patch baseline.
**/
export class PatchRuleGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=PatchRules", elemType: shared.PatchRule })
  patchRules: PatchRule[];
}
