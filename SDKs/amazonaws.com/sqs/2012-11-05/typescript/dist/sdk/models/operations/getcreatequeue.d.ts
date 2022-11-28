import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateQueueActionEnum {
    CreateQueue = "CreateQueue"
}
export declare enum GetCreateQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetCreateQueueQueryParams extends SpeakeasyBase {
    action: GetCreateQueueActionEnum;
    attribute?: Map<string, string>;
    queueName: string;
    tag?: Map<string, string>;
    version: GetCreateQueueVersionEnum;
}
export declare class GetCreateQueueHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateQueueRequest extends SpeakeasyBase {
    queryParams: GetCreateQueueQueryParams;
    headers: GetCreateQueueHeaders;
}
export declare class GetCreateQueueResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
