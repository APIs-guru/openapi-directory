import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Api-Key" })
  apiKey: string;
}


export class SchemeOAuth2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2?: SchemeOAuth2;
}
