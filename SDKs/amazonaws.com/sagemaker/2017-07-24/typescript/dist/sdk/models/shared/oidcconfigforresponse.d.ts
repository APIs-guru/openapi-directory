import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Your OIDC IdP workforce configuration.
**/
export declare class OidcConfigForResponse extends SpeakeasyBase {
    authorizationEndpoint?: string;
    clientId?: string;
    issuer?: string;
    jwksUri?: string;
    logoutEndpoint?: string;
    tokenEndpoint?: string;
    userInfoEndpoint?: string;
}
