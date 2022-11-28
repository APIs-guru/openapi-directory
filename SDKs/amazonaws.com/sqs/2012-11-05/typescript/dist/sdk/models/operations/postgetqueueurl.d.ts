import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetQueueUrlActionEnum {
    GetQueueUrl = "GetQueueUrl"
}
export declare enum PostGetQueueUrlVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostGetQueueUrlQueryParams extends SpeakeasyBase {
    action: PostGetQueueUrlActionEnum;
    version: PostGetQueueUrlVersionEnum;
}
export declare class PostGetQueueUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetQueueUrlRequest extends SpeakeasyBase {
    queryParams: PostGetQueueUrlQueryParams;
    headers: PostGetQueueUrlHeaders;
    request?: Uint8Array;
}
export declare class PostGetQueueUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
