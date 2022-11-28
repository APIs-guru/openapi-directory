import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPurgeQueuePathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetPurgeQueueActionEnum {
    PurgeQueue = "PurgeQueue"
}
export declare enum GetPurgeQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetPurgeQueueQueryParams extends SpeakeasyBase {
    action: GetPurgeQueueActionEnum;
    version: GetPurgeQueueVersionEnum;
}
export declare class GetPurgeQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPurgeQueueRequest extends SpeakeasyBase {
    pathParams: GetPurgeQueuePathParams;
    queryParams: GetPurgeQueueQueryParams;
    headers: GetPurgeQueueHeaders;
}
export declare class GetPurgeQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
