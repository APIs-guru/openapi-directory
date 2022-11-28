import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeOauthAuthorizeCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeOauthsecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeCustomkey2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-2" })
  apiKey: string;
}


export class SchemeCustomkeys1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X1123" })
  apiKey: string;
}


export class SchemeBearerAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
