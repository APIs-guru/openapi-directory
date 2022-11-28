import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetListDeadLetterSourceQueuesPathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetListDeadLetterSourceQueuesActionEnum {
    ListDeadLetterSourceQueues = "ListDeadLetterSourceQueues"
}
export declare enum GetListDeadLetterSourceQueuesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetListDeadLetterSourceQueuesQueryParams extends SpeakeasyBase {
    action: GetListDeadLetterSourceQueuesActionEnum;
    maxResults?: number;
    nextToken?: string;
    version: GetListDeadLetterSourceQueuesVersionEnum;
}
export declare class GetListDeadLetterSourceQueuesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListDeadLetterSourceQueuesRequest extends SpeakeasyBase {
    pathParams: GetListDeadLetterSourceQueuesPathParams;
    queryParams: GetListDeadLetterSourceQueuesQueryParams;
    headers: GetListDeadLetterSourceQueuesHeaders;
}
export declare class GetListDeadLetterSourceQueuesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
