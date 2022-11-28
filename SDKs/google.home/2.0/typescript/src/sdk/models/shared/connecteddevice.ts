import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";



export class ConnectedDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device: Device;

  @SpeakeasyMetadata({ data: "json, name=enabled_profiles" })
  enabledProfiles: number;
}
