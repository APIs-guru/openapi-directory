import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeCastLocalAuthorizationToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=cast-local-authorization-token" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  castLocalAuthorizationToken: SchemeCastLocalAuthorizationToken;
}
