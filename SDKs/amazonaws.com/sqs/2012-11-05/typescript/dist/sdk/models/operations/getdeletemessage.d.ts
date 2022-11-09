import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetDeleteMessagePathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetDeleteMessageActionEnum {
    DeleteMessage = "DeleteMessage"
}
export declare enum GetDeleteMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetDeleteMessageQueryParams extends SpeakeasyBase {
    action: GetDeleteMessageActionEnum;
    receiptHandle: string;
    version: GetDeleteMessageVersionEnum;
}
export declare class GetDeleteMessageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteMessageRequest extends SpeakeasyBase {
    pathParams: GetDeleteMessagePathParams;
    queryParams: GetDeleteMessageQueryParams;
    headers: GetDeleteMessageHeaders;
}
export declare class GetDeleteMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
