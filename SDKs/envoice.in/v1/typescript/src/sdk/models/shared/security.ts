import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeXAuthKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=x-auth-key" })
  apiKey: string;
}


export class SchemeXAuthSecret extends SpeakeasyBase {
  @Metadata({ data: "security, name=x-auth-secret" })
  apiKey: string;
}
