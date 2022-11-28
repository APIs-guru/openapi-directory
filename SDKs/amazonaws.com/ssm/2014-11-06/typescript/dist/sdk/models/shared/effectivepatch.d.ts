import { SpeakeasyBase } from "../../../internal/utils";
import { Patch } from "./patch";
import { PatchStatus } from "./patchstatus";
/**
 * The <code>EffectivePatch</code> structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.
**/
export declare class EffectivePatch extends SpeakeasyBase {
    patch?: Patch;
    patchStatus?: PatchStatus;
}
