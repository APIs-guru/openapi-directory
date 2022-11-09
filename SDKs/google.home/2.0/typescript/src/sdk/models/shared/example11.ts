import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Example11 extends SpeakeasyBase {
  @Metadata({ data: "json, name=app_device_id" })
  appDeviceId: string;

  @Metadata({ data: "json, name=certificate" })
  certificate: string;

  @Metadata({ data: "json, name=signed_data" })
  signedData: string;
}
