import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Patch } from "./patch";
import { PatchStatus } from "./patchstatus";


// EffectivePatch
/** 
 * The <code>EffectivePatch</code> structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.
**/
export class EffectivePatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=Patch" })
  patch?: Patch;

  @Metadata({ data: "json, name=PatchStatus" })
  patchStatus?: PatchStatus;
}
