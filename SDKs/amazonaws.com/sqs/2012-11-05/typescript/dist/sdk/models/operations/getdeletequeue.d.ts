import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeleteQueuePathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetDeleteQueueActionEnum {
    DeleteQueue = "DeleteQueue"
}
export declare enum GetDeleteQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetDeleteQueueQueryParams extends SpeakeasyBase {
    action: GetDeleteQueueActionEnum;
    version: GetDeleteQueueVersionEnum;
}
export declare class GetDeleteQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteQueueRequest extends SpeakeasyBase {
    pathParams: GetDeleteQueuePathParams;
    queryParams: GetDeleteQueueQueryParams;
    headers: GetDeleteQueueHeaders;
}
export declare class GetDeleteQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
