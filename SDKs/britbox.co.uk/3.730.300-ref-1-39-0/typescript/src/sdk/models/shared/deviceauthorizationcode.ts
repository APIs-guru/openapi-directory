import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeviceAuthorizationCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;
}
