import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateEventSubscriptionActionEnum {
    CreateEventSubscription = "CreateEventSubscription"
}
export declare enum GetCreateEventSubscriptionVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetCreateEventSubscriptionQueryParams extends SpeakeasyBase {
    action: GetCreateEventSubscriptionActionEnum;
    enabled?: boolean;
    eventCategories?: string[];
    snsTopicArn: string;
    sourceIds?: string[];
    sourceType?: string;
    subscriptionName: string;
    version: GetCreateEventSubscriptionVersionEnum;
}
export declare class GetCreateEventSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateEventSubscriptionRequest extends SpeakeasyBase {
    queryParams: GetCreateEventSubscriptionQueryParams;
    headers: GetCreateEventSubscriptionHeaders;
}
export declare class GetCreateEventSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
