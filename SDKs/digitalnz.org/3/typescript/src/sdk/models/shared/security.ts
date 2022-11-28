import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiKeyAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=api_key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyAuth: SchemeApiKeyAuth;
}
