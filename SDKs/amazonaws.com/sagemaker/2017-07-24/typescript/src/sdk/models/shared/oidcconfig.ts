import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OidcConfig
/** 
 * Use this parameter to configure your OIDC Identity Provider (IdP).
**/
export class OidcConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorizationEndpoint" })
  authorizationEndpoint: string;

  @SpeakeasyMetadata({ data: "json, name=ClientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=ClientSecret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=Issuer" })
  issuer: string;

  @SpeakeasyMetadata({ data: "json, name=JwksUri" })
  jwksUri: string;

  @SpeakeasyMetadata({ data: "json, name=LogoutEndpoint" })
  logoutEndpoint: string;

  @SpeakeasyMetadata({ data: "json, name=TokenEndpoint" })
  tokenEndpoint: string;

  @SpeakeasyMetadata({ data: "json, name=UserInfoEndpoint" })
  userInfoEndpoint: string;
}
