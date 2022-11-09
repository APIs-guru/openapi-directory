import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeOauth2 extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemePersonalAccessToken extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: SchemePersonalAccessToken;
}


export class SecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: SchemeOauth2;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SecurityOption2;
}
