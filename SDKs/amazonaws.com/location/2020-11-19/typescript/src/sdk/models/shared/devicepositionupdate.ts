import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DevicePositionUpdate
/** 
 * Contains the position update details for a device.
**/
export class DevicePositionUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceId" })
  deviceId: string;

  @Metadata({ data: "json, name=Position" })
  position: number[];

  @Metadata({ data: "json, name=SampleTime" })
  sampleTime: Date;
}
