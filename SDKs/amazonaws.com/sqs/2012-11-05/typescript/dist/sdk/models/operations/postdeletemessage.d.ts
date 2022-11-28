import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteMessageActionEnum {
    DeleteMessage = "DeleteMessage"
}
export declare enum PostDeleteMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostDeleteMessageQueryParams extends SpeakeasyBase {
    action: PostDeleteMessageActionEnum;
    version: PostDeleteMessageVersionEnum;
}
export declare class PostDeleteMessageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteMessageRequest extends SpeakeasyBase {
    queryParams: PostDeleteMessageQueryParams;
    headers: PostDeleteMessageHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
