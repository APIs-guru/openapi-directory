import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRemoveSourceIdentifierFromSubscriptionActionEnum {
    RemoveSourceIdentifierFromSubscription = "RemoveSourceIdentifierFromSubscription"
}
export declare enum GetRemoveSourceIdentifierFromSubscriptionVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetRemoveSourceIdentifierFromSubscriptionQueryParams extends SpeakeasyBase {
    action: GetRemoveSourceIdentifierFromSubscriptionActionEnum;
    sourceIdentifier: string;
    subscriptionName: string;
    version: GetRemoveSourceIdentifierFromSubscriptionVersionEnum;
}
export declare class GetRemoveSourceIdentifierFromSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRemoveSourceIdentifierFromSubscriptionRequest extends SpeakeasyBase {
    queryParams: GetRemoveSourceIdentifierFromSubscriptionQueryParams;
    headers: GetRemoveSourceIdentifierFromSubscriptionHeaders;
}
export declare class GetRemoveSourceIdentifierFromSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
