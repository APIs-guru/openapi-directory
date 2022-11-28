import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDeviceFleetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;
}
