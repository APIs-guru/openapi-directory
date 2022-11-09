import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppDeviceIdRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=app_id" })
  appId: string;
}
