import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";



export class GetPatchBaselineForPatchGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @SpeakeasyMetadata({ data: "json, name=PatchGroup" })
  patchGroup?: string;
}
