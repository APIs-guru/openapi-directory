import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";


export class GetPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @Metadata({ data: "json, name=PatchGroup" })
  patchGroup: string;
}
