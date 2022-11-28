import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDevicePositionsResponseEntry
/** 
 * Contains the tracker resource details.
**/
export class ListDevicePositionsResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "json, name=Position" })
  position: number[];

  @SpeakeasyMetadata({ data: "json, name=SampleTime" })
  sampleTime: Date;
}
