import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Example11 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app_device_id" })
  appDeviceId: string;

  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate: string;

  @SpeakeasyMetadata({ data: "json, name=signed_data" })
  signedData: string;
}
