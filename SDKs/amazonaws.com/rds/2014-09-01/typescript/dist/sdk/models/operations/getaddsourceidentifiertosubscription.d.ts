import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAddSourceIdentifierToSubscriptionActionEnum {
    AddSourceIdentifierToSubscription = "AddSourceIdentifierToSubscription"
}
export declare enum GetAddSourceIdentifierToSubscriptionVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class GetAddSourceIdentifierToSubscriptionQueryParams extends SpeakeasyBase {
    action: GetAddSourceIdentifierToSubscriptionActionEnum;
    sourceIdentifier: string;
    subscriptionName: string;
    version: GetAddSourceIdentifierToSubscriptionVersionEnum;
}
export declare class GetAddSourceIdentifierToSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAddSourceIdentifierToSubscriptionRequest extends SpeakeasyBase {
    queryParams: GetAddSourceIdentifierToSubscriptionQueryParams;
    headers: GetAddSourceIdentifierToSubscriptionHeaders;
}
export declare class GetAddSourceIdentifierToSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
