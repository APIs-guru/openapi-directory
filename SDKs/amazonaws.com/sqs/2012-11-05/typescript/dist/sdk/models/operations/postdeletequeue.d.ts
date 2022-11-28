import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteQueueActionEnum {
    DeleteQueue = "DeleteQueue"
}
export declare enum PostDeleteQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostDeleteQueueQueryParams extends SpeakeasyBase {
    action: PostDeleteQueueActionEnum;
    version: PostDeleteQueueVersionEnum;
}
export declare class PostDeleteQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteQueueRequest extends SpeakeasyBase {
    queryParams: PostDeleteQueueQueryParams;
    headers: PostDeleteQueueHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
