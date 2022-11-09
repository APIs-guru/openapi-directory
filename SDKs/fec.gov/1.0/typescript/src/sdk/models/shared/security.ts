import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKeyHeaderAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-Api-Key" })
  apiKey: string;
}


export class SchemeApiKeyQueryAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=api_key" })
  apiKey: string;
}


export class SchemeApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=api_key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeaderAuth: SchemeApiKeyHeaderAuth;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyQueryAuth: SchemeApiKeyQueryAuth;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: SchemeApiKey;
}
