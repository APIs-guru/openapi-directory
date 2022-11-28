import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DevicePosition
/** 
 * Contains the device position details.
**/
export class DevicePosition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Position" })
  position: number[];

  @SpeakeasyMetadata({ data: "json, name=ReceivedTime" })
  receivedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=SampleTime" })
  sampleTime: Date;
}
