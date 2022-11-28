import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Device
/** 
 * Information of a particular device.
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DeviceName" })
  deviceName: string;

  @SpeakeasyMetadata({ data: "json, name=IotThingName" })
  iotThingName?: string;
}
