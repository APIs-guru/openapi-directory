import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EdgeModelSummary } from "./edgemodelsummary";



// DeviceSummary
/** 
 * Summary of the device.
**/
export class DeviceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceArn" })
  deviceArn: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName: string;

  @SpeakeasyMetadata({ data: "json, name=IotThingName" })
  iotThingName?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestHeartbeat" })
  latestHeartbeat?: Date;

  @SpeakeasyMetadata({ data: "json, name=Models", elemType: EdgeModelSummary })
  models?: EdgeModelSummary[];

  @SpeakeasyMetadata({ data: "json, name=RegistrationTime" })
  registrationTime?: Date;
}
