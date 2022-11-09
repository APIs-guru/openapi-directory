import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetGetQueueAttributesPathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetGetQueueAttributesActionEnum {
    GetQueueAttributes = "GetQueueAttributes"
}
export declare enum GetGetQueueAttributesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetGetQueueAttributesQueryParams extends SpeakeasyBase {
    action: GetGetQueueAttributesActionEnum;
    attributeNames?: shared.QueueAttributeNameEnum[];
    version: GetGetQueueAttributesVersionEnum;
}
export declare class GetGetQueueAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetQueueAttributesRequest extends SpeakeasyBase {
    pathParams: GetGetQueueAttributesPathParams;
    queryParams: GetGetQueueAttributesQueryParams;
    headers: GetGetQueueAttributesHeaders;
}
export declare class GetGetQueueAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
