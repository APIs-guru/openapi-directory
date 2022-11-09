import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EdgeModelSummary } from "./edgemodelsummary";


// DeviceSummary
/** 
 * Summary of the device.
**/
export class DeviceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DeviceArn" })
  deviceArn: string;

  @Metadata({ data: "json, name=DeviceFleetName" })
  deviceFleetName?: string;

  @Metadata({ data: "json, name=DeviceName" })
  deviceName: string;

  @Metadata({ data: "json, name=IotThingName" })
  iotThingName?: string;

  @Metadata({ data: "json, name=LatestHeartbeat" })
  latestHeartbeat?: Date;

  @Metadata({ data: "json, name=Models", elemType: shared.EdgeModelSummary })
  models?: EdgeModelSummary[];

  @Metadata({ data: "json, name=RegistrationTime" })
  registrationTime?: Date;
}
