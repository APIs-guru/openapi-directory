import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDevicePositionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=Position" })
  position: number[];

  @Metadata({ data: "json, name=ReceivedTime" })
  receivedTime: Date;

  @Metadata({ data: "json, name=SampleTime" })
  sampleTime: Date;
}
