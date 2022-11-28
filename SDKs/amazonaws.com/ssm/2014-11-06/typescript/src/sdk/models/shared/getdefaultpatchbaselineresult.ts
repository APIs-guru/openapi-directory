import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";



export class GetDefaultPatchBaselineResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaselineId" })
  baselineId?: string;

  @SpeakeasyMetadata({ data: "json, name=OperatingSystem" })
  operatingSystem?: OperatingSystemEnum;
}
