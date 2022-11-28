import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSetQueueAttributesPathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetSetQueueAttributesActionEnum {
    SetQueueAttributes = "SetQueueAttributes"
}
export declare enum GetSetQueueAttributesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetSetQueueAttributesQueryParams extends SpeakeasyBase {
    action: GetSetQueueAttributesActionEnum;
    attribute: Map<string, string>;
    version: GetSetQueueAttributesVersionEnum;
}
export declare class GetSetQueueAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSetQueueAttributesRequest extends SpeakeasyBase {
    pathParams: GetSetQueueAttributesPathParams;
    queryParams: GetSetQueueAttributesQueryParams;
    headers: GetSetQueueAttributesHeaders;
}
export declare class GetSetQueueAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
