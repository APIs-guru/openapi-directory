import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdateOAuthClientRequestClientTypeEnum {
    Confidential = "confidential",
    Public = "public"
}
export declare enum UpdateOAuthClientRequestGrantTypesEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    Implicit = "implicit",
    Password = "password",
    RefreshToken = "refresh_token"
}
/**
 * Request model for updating an OAuth client
**/
export declare class UpdateOAuthClientRequest extends SpeakeasyBase {
    accessTokenValidity?: number;
    approvalValidity?: number;
    clientName?: string;
    clientSecret?: string;
    clientType?: UpdateOAuthClientRequestClientTypeEnum;
    grantTypes: UpdateOAuthClientRequestGrantTypesEnum[];
    isEnabled?: boolean;
    redirectUris?: string[];
    refreshTokenValidity?: number;
}
