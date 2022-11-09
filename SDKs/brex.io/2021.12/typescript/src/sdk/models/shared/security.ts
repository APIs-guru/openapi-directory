import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeUserKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=user_key" })
  apiKey: string;
}
