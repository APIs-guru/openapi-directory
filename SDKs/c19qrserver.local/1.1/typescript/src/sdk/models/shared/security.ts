import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeTokenHeader extends SpeakeasyBase {
  @Metadata({ data: "security, name=token" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  tokenHeader: SchemeTokenHeader;
}
