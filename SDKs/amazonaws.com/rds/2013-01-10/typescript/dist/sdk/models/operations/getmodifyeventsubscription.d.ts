import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyEventSubscriptionActionEnum {
    ModifyEventSubscription = "ModifyEventSubscription"
}
export declare enum GetModifyEventSubscriptionVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetModifyEventSubscriptionQueryParams extends SpeakeasyBase {
    action: GetModifyEventSubscriptionActionEnum;
    enabled?: boolean;
    eventCategories?: string[];
    snsTopicArn?: string;
    sourceType?: string;
    subscriptionName: string;
    version: GetModifyEventSubscriptionVersionEnum;
}
export declare class GetModifyEventSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyEventSubscriptionRequest extends SpeakeasyBase {
    queryParams: GetModifyEventSubscriptionQueryParams;
    headers: GetModifyEventSubscriptionHeaders;
}
export declare class GetModifyEventSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
