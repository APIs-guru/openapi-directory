import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListQueuesActionEnum {
    ListQueues = "ListQueues"
}
export declare enum GetListQueuesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetListQueuesQueryParams extends SpeakeasyBase {
    action: GetListQueuesActionEnum;
    maxResults?: number;
    nextToken?: string;
    queueNamePrefix?: string;
    version: GetListQueuesVersionEnum;
}
export declare class GetListQueuesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListQueuesRequest extends SpeakeasyBase {
    queryParams: GetListQueuesQueryParams;
    headers: GetListQueuesHeaders;
}
export declare class GetListQueuesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
