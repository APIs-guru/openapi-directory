import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiKeyHeaderAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-Api-Key" })
  apiKey: string;
}


export class SchemeApiKeyQueryAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=api_key" })
  apiKey: string;
}


export class SchemeApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=api_key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeaderAuth: SchemeApiKeyHeaderAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyQueryAuth: SchemeApiKeyQueryAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: SchemeApiKey;
}
