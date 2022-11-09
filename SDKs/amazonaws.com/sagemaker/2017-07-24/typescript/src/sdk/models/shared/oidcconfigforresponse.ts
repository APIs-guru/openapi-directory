import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OidcConfigForResponse
/** 
 * Your OIDC IdP workforce configuration.
**/
export class OidcConfigForResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorizationEndpoint" })
  authorizationEndpoint?: string;

  @Metadata({ data: "json, name=ClientId" })
  clientId?: string;

  @Metadata({ data: "json, name=Issuer" })
  issuer?: string;

  @Metadata({ data: "json, name=JwksUri" })
  jwksUri?: string;

  @Metadata({ data: "json, name=LogoutEndpoint" })
  logoutEndpoint?: string;

  @Metadata({ data: "json, name=TokenEndpoint" })
  tokenEndpoint?: string;

  @Metadata({ data: "json, name=UserInfoEndpoint" })
  userInfoEndpoint?: string;
}
