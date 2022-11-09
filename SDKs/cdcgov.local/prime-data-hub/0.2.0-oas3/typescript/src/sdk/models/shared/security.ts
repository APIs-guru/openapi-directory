import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKeyAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=x-functions-key" })
  apiKey: string;
}


export class SchemeOAuth2 extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
