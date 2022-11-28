import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";



export class GetPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=PatchGroup" })
  patchGroup: string;
}
