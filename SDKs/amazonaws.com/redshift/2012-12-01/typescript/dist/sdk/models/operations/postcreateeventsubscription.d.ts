import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateEventSubscriptionActionEnum {
    CreateEventSubscription = "CreateEventSubscription"
}
export declare enum PostCreateEventSubscriptionVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateEventSubscriptionQueryParams extends SpeakeasyBase {
    action: PostCreateEventSubscriptionActionEnum;
    version: PostCreateEventSubscriptionVersionEnum;
}
export declare class PostCreateEventSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateEventSubscriptionRequest extends SpeakeasyBase {
    queryParams: PostCreateEventSubscriptionQueryParams;
    headers: PostCreateEventSubscriptionHeaders;
    request?: Uint8Array;
}
export declare class PostCreateEventSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
