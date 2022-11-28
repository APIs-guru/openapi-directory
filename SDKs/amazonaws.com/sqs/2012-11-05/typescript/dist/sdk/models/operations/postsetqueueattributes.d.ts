import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostSetQueueAttributesActionEnum {
    SetQueueAttributes = "SetQueueAttributes"
}
export declare enum PostSetQueueAttributesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostSetQueueAttributesQueryParams extends SpeakeasyBase {
    action: PostSetQueueAttributesActionEnum;
    version: PostSetQueueAttributesVersionEnum;
}
export declare class PostSetQueueAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSetQueueAttributesRequest extends SpeakeasyBase {
    queryParams: PostSetQueueAttributesQueryParams;
    headers: PostSetQueueAttributesHeaders;
    request?: Uint8Array;
}
export declare class PostSetQueueAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
