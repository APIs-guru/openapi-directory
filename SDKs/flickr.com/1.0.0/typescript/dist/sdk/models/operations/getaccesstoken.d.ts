import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccessTokenQueryParams extends SpeakeasyBase {
    oauthConsumerKey: string;
    oauthNonce: string;
    oauthSignature: string;
    oauthSignatureMethod: string;
    oauthTimestamp: string;
    oauthToken: string;
    oauthVerifier: string;
    oauthVersion: string;
}
export declare class GetAccessTokenRequest extends SpeakeasyBase {
    queryParams: GetAccessTokenQueryParams;
}
export declare class GetAccessTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAccessToken200ApplicationJsonString?: string;
}
