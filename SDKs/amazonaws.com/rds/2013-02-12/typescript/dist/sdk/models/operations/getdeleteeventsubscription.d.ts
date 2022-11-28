import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteEventSubscriptionActionEnum {
    DeleteEventSubscription = "DeleteEventSubscription"
}
export declare enum GetDeleteEventSubscriptionVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetDeleteEventSubscriptionQueryParams extends SpeakeasyBase {
    action: GetDeleteEventSubscriptionActionEnum;
    subscriptionName: string;
    version: GetDeleteEventSubscriptionVersionEnum;
}
export declare class GetDeleteEventSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteEventSubscriptionRequest extends SpeakeasyBase {
    queryParams: GetDeleteEventSubscriptionQueryParams;
    headers: GetDeleteEventSubscriptionHeaders;
}
export declare class GetDeleteEventSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
