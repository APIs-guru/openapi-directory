import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterPatchBaselineForPatchGroupResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineId" })
  baselineId?: string;

  @Metadata({ data: "json, name=PatchGroup" })
  patchGroup?: string;
}
