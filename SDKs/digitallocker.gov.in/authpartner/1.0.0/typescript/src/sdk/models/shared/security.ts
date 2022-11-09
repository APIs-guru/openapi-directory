import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeCustomkey2 extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-2" })
  apiKey: string;
}


export class SchemeCustomkeys1 extends SpeakeasyBase {
  @Metadata({ data: "security, name=X1123" })
  apiKey: string;
}


export class SchemeBearerAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeOauthAuthorizeCode extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeOauthsecurity extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
