import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetChangeMessageVisibilityPathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetChangeMessageVisibilityActionEnum {
    ChangeMessageVisibility = "ChangeMessageVisibility"
}
export declare enum GetChangeMessageVisibilityVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetChangeMessageVisibilityQueryParams extends SpeakeasyBase {
    action: GetChangeMessageVisibilityActionEnum;
    receiptHandle: string;
    version: GetChangeMessageVisibilityVersionEnum;
    visibilityTimeout: number;
}
export declare class GetChangeMessageVisibilityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetChangeMessageVisibilityRequest extends SpeakeasyBase {
    pathParams: GetChangeMessageVisibilityPathParams;
    queryParams: GetChangeMessageVisibilityQueryParams;
    headers: GetChangeMessageVisibilityHeaders;
}
export declare class GetChangeMessageVisibilityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
