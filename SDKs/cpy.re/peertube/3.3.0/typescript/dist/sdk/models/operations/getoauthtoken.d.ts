import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOAuthToken200ApplicationJson extends SpeakeasyBase {
    accessToken?: string;
    expiresIn?: number;
    refreshToken?: string;
    refreshTokenExpiresIn?: number;
    tokenType?: string;
}
export declare class GetOAuthTokenRequest extends SpeakeasyBase {
    request?: any;
}
export declare class GetOAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOAuthToken200ApplicationJsonObject?: GetOAuthToken200ApplicationJson;
}
