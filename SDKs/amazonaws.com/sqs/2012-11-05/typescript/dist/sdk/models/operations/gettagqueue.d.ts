import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetTagQueuePathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetTagQueueActionEnum {
    TagQueue = "TagQueue"
}
export declare enum GetTagQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetTagQueueQueryParams extends SpeakeasyBase {
    action: GetTagQueueActionEnum;
    tags: Map<string, string>;
    version: GetTagQueueVersionEnum;
}
export declare class GetTagQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTagQueueRequest extends SpeakeasyBase {
    pathParams: GetTagQueuePathParams;
    queryParams: GetTagQueueQueryParams;
    headers: GetTagQueueHeaders;
}
export declare class GetTagQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
