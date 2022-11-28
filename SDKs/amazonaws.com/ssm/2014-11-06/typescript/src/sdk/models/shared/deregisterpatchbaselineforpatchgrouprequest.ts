import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId: string;

  @SpeakeasyMetadata({ data: "json, name=PatchGroup" })
  patchGroup: string;
}
