import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAddSourceIdentifierToSubscriptionActionEnum {
    AddSourceIdentifierToSubscription = "AddSourceIdentifierToSubscription"
}
export declare enum PostAddSourceIdentifierToSubscriptionVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class PostAddSourceIdentifierToSubscriptionQueryParams extends SpeakeasyBase {
    action: PostAddSourceIdentifierToSubscriptionActionEnum;
    version: PostAddSourceIdentifierToSubscriptionVersionEnum;
}
export declare class PostAddSourceIdentifierToSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAddSourceIdentifierToSubscriptionRequest extends SpeakeasyBase {
    queryParams: PostAddSourceIdentifierToSubscriptionQueryParams;
    headers: PostAddSourceIdentifierToSubscriptionHeaders;
    request?: Uint8Array;
}
export declare class PostAddSourceIdentifierToSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
