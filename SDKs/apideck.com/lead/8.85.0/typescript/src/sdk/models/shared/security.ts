import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class SchemeApplicationId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=x-apideck-app-id" })
  apiKey: string;
}


export class SchemeConsumerId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=x-apideck-consumer-id" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  applicationId: SchemeApplicationId;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  consumerId: SchemeConsumerId;
}
