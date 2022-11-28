import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Use this parameter to configure your OIDC Identity Provider (IdP).
**/
export declare class OidcConfig extends SpeakeasyBase {
    authorizationEndpoint: string;
    clientId: string;
    clientSecret: string;
    issuer: string;
    jwksUri: string;
    logoutEndpoint: string;
    tokenEndpoint: string;
    userInfoEndpoint: string;
}
