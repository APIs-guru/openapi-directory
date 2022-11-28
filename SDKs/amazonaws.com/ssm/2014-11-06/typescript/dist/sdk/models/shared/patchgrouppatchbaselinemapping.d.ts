import { SpeakeasyBase } from "../../../internal/utils";
import { PatchBaselineIdentity } from "./patchbaselineidentity";
/**
 * The mapping between a patch group and the patch baseline the patch group is registered with.
**/
export declare class PatchGroupPatchBaselineMapping extends SpeakeasyBase {
    baselineIdentity?: PatchBaselineIdentity;
    patchGroup?: string;
}
