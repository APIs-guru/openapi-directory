import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRequestTokenQueryParams extends SpeakeasyBase {
    oauthCallback: string;
    oauthConsumerKey: string;
    oauthNonce: string;
    oauthSignature: string;
    oauthSignatureMethod: string;
    oauthTimestamp: string;
    oauthVersion: string;
}
export declare class GetRequestTokenRequest extends SpeakeasyBase {
    queryParams: GetRequestTokenQueryParams;
}
export declare class GetRequestTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRequestToken200ApplicationJsonString?: string;
}
