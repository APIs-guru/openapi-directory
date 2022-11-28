import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DevicePositionUpdate
/** 
 * Contains the position update details for a device.
**/
export class DevicePositionUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "json, name=Position" })
  position: number[];

  @SpeakeasyMetadata({ data: "json, name=SampleTime" })
  sampleTime: Date;
}
