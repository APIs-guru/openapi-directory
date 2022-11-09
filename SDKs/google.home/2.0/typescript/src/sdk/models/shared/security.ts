import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeCastLocalAuthorizationToken extends SpeakeasyBase {
  @Metadata({ data: "security, name=cast-local-authorization-token" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  castLocalAuthorizationToken: SchemeCastLocalAuthorizationToken;
}
