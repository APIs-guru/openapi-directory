import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiKeyAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=x-functions-key" })
  apiKey: string;
}


export class SchemeOAuth2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
