import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeHeaderApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  headerApiKey: SchemeHeaderApiKey;
}


export class SchemeQueryApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=apikey" })
  apiKey: string;
}
