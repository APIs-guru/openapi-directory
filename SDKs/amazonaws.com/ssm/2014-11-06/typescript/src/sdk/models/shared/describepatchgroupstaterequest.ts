import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePatchGroupStateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PatchGroup" })
  patchGroup: string;
}
