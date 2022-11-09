import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";


export class GetPatchBaselineForPatchGroupResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaselineId" })
  baselineId?: string;

  @Metadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;

  @Metadata({ data: "json, name=PatchGroup" })
  patchGroup?: string;
}
