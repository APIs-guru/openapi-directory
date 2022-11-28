import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeUserKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=user_key" })
  apiKey: string;
}
