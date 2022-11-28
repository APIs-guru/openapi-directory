import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchBaselineIdentity } from "./patchbaselineidentity";



// PatchGroupPatchBaselineMapping
/** 
 * The mapping between a patch group and the patch baseline the patch group is registered with.
**/
export class PatchGroupPatchBaselineMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineIdentity" })
  baselineIdentity?: PatchBaselineIdentity;

  @SpeakeasyMetadata({ data: "json, name=PatchGroup" })
  patchGroup?: string;
}
