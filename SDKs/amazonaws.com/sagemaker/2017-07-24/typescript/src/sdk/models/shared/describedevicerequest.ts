import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
