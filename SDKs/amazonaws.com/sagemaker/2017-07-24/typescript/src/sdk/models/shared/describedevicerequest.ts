import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @Metadata({ data: "json, name=DeviceName" })
  deviceName: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
