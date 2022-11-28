import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDecodeAuthorizationMessageActionEnum {
    DecodeAuthorizationMessage = "DecodeAuthorizationMessage"
}
export declare enum PostDecodeAuthorizationMessageVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class PostDecodeAuthorizationMessageQueryParams extends SpeakeasyBase {
    action: PostDecodeAuthorizationMessageActionEnum;
    version: PostDecodeAuthorizationMessageVersionEnum;
}
export declare class PostDecodeAuthorizationMessageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDecodeAuthorizationMessageRequest extends SpeakeasyBase {
    queryParams: PostDecodeAuthorizationMessageQueryParams;
    headers: PostDecodeAuthorizationMessageHeaders;
    request?: Uint8Array;
}
export declare class PostDecodeAuthorizationMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
