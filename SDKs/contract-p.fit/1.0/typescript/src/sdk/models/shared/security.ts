import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeBasic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "security, name=username" })
  username: string;
}


export class SchemeToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  token?: SchemeToken;
}
