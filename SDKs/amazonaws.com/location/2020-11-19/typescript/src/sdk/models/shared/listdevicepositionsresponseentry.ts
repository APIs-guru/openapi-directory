import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListDevicePositionsResponseEntry
/** 
 * Contains the tracker resource details.
**/
export class ListDevicePositionsResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @Metadata({ data: "json, name=Position" })
  position: number[];

  @Metadata({ data: "json, name=SampleTime" })
  sampleTime: Date;
}
