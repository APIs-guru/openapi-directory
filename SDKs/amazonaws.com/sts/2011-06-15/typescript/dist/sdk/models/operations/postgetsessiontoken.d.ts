import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetSessionTokenActionEnum {
    GetSessionToken = "GetSessionToken"
}
export declare enum PostGetSessionTokenVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class PostGetSessionTokenQueryParams extends SpeakeasyBase {
    action: PostGetSessionTokenActionEnum;
    version: PostGetSessionTokenVersionEnum;
}
export declare class PostGetSessionTokenHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetSessionTokenRequest extends SpeakeasyBase {
    queryParams: PostGetSessionTokenQueryParams;
    headers: PostGetSessionTokenHeaders;
    request?: Uint8Array;
}
export declare class PostGetSessionTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
