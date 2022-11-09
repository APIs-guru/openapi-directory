import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeHmac extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  hmac: SchemeHmac;
}
