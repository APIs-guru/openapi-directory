import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePatchGroupStateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PatchGroup" })
  patchGroup: string;
}
