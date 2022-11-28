import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";



export class GetDefaultPatchBaselineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;
}
