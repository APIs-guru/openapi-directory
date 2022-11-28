import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetQueueUrlActionEnum {
    GetQueueUrl = "GetQueueUrl"
}
export declare enum GetGetQueueUrlVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetGetQueueUrlQueryParams extends SpeakeasyBase {
    action: GetGetQueueUrlActionEnum;
    queueName: string;
    queueOwnerAwsAccountId?: string;
    version: GetGetQueueUrlVersionEnum;
}
export declare class GetGetQueueUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetQueueUrlRequest extends SpeakeasyBase {
    queryParams: GetGetQueueUrlQueryParams;
    headers: GetGetQueueUrlHeaders;
}
export declare class GetGetQueueUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
