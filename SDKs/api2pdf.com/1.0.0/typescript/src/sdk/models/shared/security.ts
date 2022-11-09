import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeHeaderApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class SchemeQueryApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=apikey" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  headerApiKey: SchemeHeaderApiKey;
}
