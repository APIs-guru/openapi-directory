import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeTokenHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=token" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  tokenHeader: SchemeTokenHeader;
}
