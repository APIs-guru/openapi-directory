import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgeModel } from "./edgemodel";



export class DescribeDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceArn" })
  deviceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName: string;

  @SpeakeasyMetadata({ data: "json, name=IotThingName" })
  iotThingName?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestHeartbeat" })
  latestHeartbeat?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxModels" })
  maxModels?: number;

  @SpeakeasyMetadata({ data: "json, name=Models", elemType: EdgeModel })
  models?: EdgeModel[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=RegistrationTime" })
  registrationTime: Date;
}
