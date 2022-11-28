import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateOAuthClientRequestClientTypeEnum {
    Confidential = "confidential",
    Public = "public"
}
export declare enum CreateOAuthClientRequestGrantTypesEnum {
    AuthorizationCode = "authorization_code",
    ClientCredentials = "client_credentials",
    Implicit = "implicit",
    Password = "password",
    RefreshToken = "refresh_token"
}
/**
 * Request model for creating an OAuth client
**/
export declare class CreateOAuthClientRequest extends SpeakeasyBase {
    accessTokenValidity?: number;
    approvalValidity?: number;
    clientId?: string;
    clientName: string;
    clientSecret?: string;
    clientType?: CreateOAuthClientRequestClientTypeEnum;
    grantTypes: CreateOAuthClientRequestGrantTypesEnum[];
    redirectUris?: string[];
    refreshTokenValidity?: number;
}
