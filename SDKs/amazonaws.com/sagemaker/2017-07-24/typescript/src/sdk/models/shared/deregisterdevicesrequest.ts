import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterDevicesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @Metadata({ data: "json, name=DeviceNames" })
  deviceNames: string[];
}
