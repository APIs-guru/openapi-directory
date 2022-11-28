import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRemoveSourceIdentifierFromSubscriptionActionEnum {
    RemoveSourceIdentifierFromSubscription = "RemoveSourceIdentifierFromSubscription"
}
export declare enum PostRemoveSourceIdentifierFromSubscriptionVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class PostRemoveSourceIdentifierFromSubscriptionQueryParams extends SpeakeasyBase {
    action: PostRemoveSourceIdentifierFromSubscriptionActionEnum;
    version: PostRemoveSourceIdentifierFromSubscriptionVersionEnum;
}
export declare class PostRemoveSourceIdentifierFromSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRemoveSourceIdentifierFromSubscriptionRequest extends SpeakeasyBase {
    queryParams: PostRemoveSourceIdentifierFromSubscriptionQueryParams;
    headers: PostRemoveSourceIdentifierFromSubscriptionHeaders;
    request?: Uint8Array;
}
export declare class PostRemoveSourceIdentifierFromSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
