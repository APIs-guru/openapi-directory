import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OidcConfigForResponse
/** 
 * Your OIDC IdP workforce configuration.
**/
export class OidcConfigForResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationEndpoint" })
  authorizationEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=Issuer" })
  issuer?: string;

  @SpeakeasyMetadata({ data: "json, name=JwksUri" })
  jwksUri?: string;

  @SpeakeasyMetadata({ data: "json, name=LogoutEndpoint" })
  logoutEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=TokenEndpoint" })
  tokenEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=UserInfoEndpoint" })
  userInfoEndpoint?: string;
}
