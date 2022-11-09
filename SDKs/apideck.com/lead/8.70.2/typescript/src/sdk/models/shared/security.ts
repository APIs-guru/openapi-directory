import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class SchemeApplicationId extends SpeakeasyBase {
  @Metadata({ data: "security, name=x-apideck-app-id" })
  apiKey: string;
}


export class SchemeConsumerId extends SpeakeasyBase {
  @Metadata({ data: "security, name=x-apideck-consumer-id" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  applicationId: SchemeApplicationId;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  consumerId: SchemeConsumerId;
}
