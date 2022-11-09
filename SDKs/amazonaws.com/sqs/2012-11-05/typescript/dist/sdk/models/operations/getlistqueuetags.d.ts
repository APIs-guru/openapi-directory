import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetListQueueTagsPathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetListQueueTagsActionEnum {
    ListQueueTags = "ListQueueTags"
}
export declare enum GetListQueueTagsVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetListQueueTagsQueryParams extends SpeakeasyBase {
    action: GetListQueueTagsActionEnum;
    version: GetListQueueTagsVersionEnum;
}
export declare class GetListQueueTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListQueueTagsRequest extends SpeakeasyBase {
    pathParams: GetListQueueTagsPathParams;
    queryParams: GetListQueueTagsQueryParams;
    headers: GetListQueueTagsHeaders;
}
export declare class GetListQueueTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
