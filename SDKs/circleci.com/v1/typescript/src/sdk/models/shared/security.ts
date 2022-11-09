import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApikey extends SpeakeasyBase {
  @Metadata({ data: "security, name=circle-token" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apikey: SchemeApikey;
}
