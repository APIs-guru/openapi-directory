import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatchBaselineIdentity } from "./patchbaselineidentity";


// PatchGroupPatchBaselineMapping
/** 
 * The mapping between a patch group and the patch baseline the patch group is registered with.
**/
export class PatchGroupPatchBaselineMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineIdentity" })
  baselineIdentity?: PatchBaselineIdentity;

  @Metadata({ data: "json, name=PatchGroup" })
  patchGroup?: string;
}
