import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeXAuthKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=x-auth-key" })
  apiKey: string;
}


export class SchemeXAuthSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=x-auth-secret" })
  apiKey: string;
}
