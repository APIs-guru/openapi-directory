import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeviceAuthorizationCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;
}
