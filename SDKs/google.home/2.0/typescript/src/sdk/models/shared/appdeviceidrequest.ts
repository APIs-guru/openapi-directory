import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppDeviceIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=app_id" })
  appId: string;
}
