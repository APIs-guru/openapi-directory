import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Device
/** 
 * Information of a particular device.
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DeviceName" })
  deviceName: string;

  @Metadata({ data: "json, name=IotThingName" })
  iotThingName?: string;
}
