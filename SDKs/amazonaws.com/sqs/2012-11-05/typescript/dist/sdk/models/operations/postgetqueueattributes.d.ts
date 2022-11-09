import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetQueueAttributesActionEnum {
    GetQueueAttributes = "GetQueueAttributes"
}
export declare enum PostGetQueueAttributesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostGetQueueAttributesQueryParams extends SpeakeasyBase {
    action: PostGetQueueAttributesActionEnum;
    version: PostGetQueueAttributesVersionEnum;
}
export declare class PostGetQueueAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetQueueAttributesRequest extends SpeakeasyBase {
    queryParams: PostGetQueueAttributesQueryParams;
    headers: PostGetQueueAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostGetQueueAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
