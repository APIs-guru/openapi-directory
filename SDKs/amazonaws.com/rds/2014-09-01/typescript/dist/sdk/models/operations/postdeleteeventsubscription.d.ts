import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteEventSubscriptionActionEnum {
    DeleteEventSubscription = "DeleteEventSubscription"
}
export declare enum PostDeleteEventSubscriptionVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDeleteEventSubscriptionQueryParams extends SpeakeasyBase {
    action: PostDeleteEventSubscriptionActionEnum;
    version: PostDeleteEventSubscriptionVersionEnum;
}
export declare class PostDeleteEventSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteEventSubscriptionRequest extends SpeakeasyBase {
    queryParams: PostDeleteEventSubscriptionQueryParams;
    headers: PostDeleteEventSubscriptionHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteEventSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
