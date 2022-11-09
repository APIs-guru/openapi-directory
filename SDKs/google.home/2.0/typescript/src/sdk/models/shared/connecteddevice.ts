import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Device } from "./device";


export class ConnectedDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device: Device;

  @Metadata({ data: "json, name=enabled_profiles" })
  enabledProfiles: number;
}
