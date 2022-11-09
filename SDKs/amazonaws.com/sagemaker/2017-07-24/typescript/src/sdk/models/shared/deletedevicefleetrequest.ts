import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDeviceFleetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;
}
