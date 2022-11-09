import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterPatchBaselineForPatchGroupResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineId" })
  baselineId?: string;

  @Metadata({ data: "json, name=PatchGroup" })
  patchGroup?: string;
}
