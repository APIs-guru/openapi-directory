import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetFederationTokenActionEnum {
    GetFederationToken = "GetFederationToken"
}
export declare enum PostGetFederationTokenVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class PostGetFederationTokenQueryParams extends SpeakeasyBase {
    action: PostGetFederationTokenActionEnum;
    version: PostGetFederationTokenVersionEnum;
}
export declare class PostGetFederationTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetFederationTokenRequest extends SpeakeasyBase {
    queryParams: PostGetFederationTokenQueryParams;
    headers: PostGetFederationTokenHeaders;
    request?: Uint8Array;
}
export declare class PostGetFederationTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
