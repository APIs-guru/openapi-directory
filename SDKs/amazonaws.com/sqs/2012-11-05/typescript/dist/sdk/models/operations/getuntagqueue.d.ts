import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUntagQueuePathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetUntagQueueActionEnum {
    UntagQueue = "UntagQueue"
}
export declare enum GetUntagQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetUntagQueueQueryParams extends SpeakeasyBase {
    action: GetUntagQueueActionEnum;
    tagKeys: string[];
    version: GetUntagQueueVersionEnum;
}
export declare class GetUntagQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUntagQueueRequest extends SpeakeasyBase {
    pathParams: GetUntagQueuePathParams;
    queryParams: GetUntagQueueQueryParams;
    headers: GetUntagQueueHeaders;
}
export declare class GetUntagQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
