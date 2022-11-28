import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReceiveMessagePathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetReceiveMessageActionEnum {
    ReceiveMessage = "ReceiveMessage"
}
export declare enum GetReceiveMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetReceiveMessageQueryParams extends SpeakeasyBase {
    action: GetReceiveMessageActionEnum;
    attributeNames?: shared.QueueAttributeNameEnum[];
    maxNumberOfMessages?: number;
    messageAttributeNames?: string[];
    receiveRequestAttemptId?: string;
    version: GetReceiveMessageVersionEnum;
    visibilityTimeout?: number;
    waitTimeSeconds?: number;
}
export declare class GetReceiveMessageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReceiveMessageRequest extends SpeakeasyBase {
    pathParams: GetReceiveMessagePathParams;
    queryParams: GetReceiveMessageQueryParams;
    headers: GetReceiveMessageHeaders;
}
export declare class GetReceiveMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
