import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDevicePositionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Position" })
  position: number[];

  @SpeakeasyMetadata({ data: "json, name=ReceivedTime" })
  receivedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=SampleTime" })
  sampleTime: Date;
}
