import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyEventSubscriptionActionEnum {
    ModifyEventSubscription = "ModifyEventSubscription"
}
export declare enum PostModifyEventSubscriptionVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class PostModifyEventSubscriptionQueryParams extends SpeakeasyBase {
    action: PostModifyEventSubscriptionActionEnum;
    version: PostModifyEventSubscriptionVersionEnum;
}
export declare class PostModifyEventSubscriptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyEventSubscriptionRequest extends SpeakeasyBase {
    queryParams: PostModifyEventSubscriptionQueryParams;
    headers: PostModifyEventSubscriptionHeaders;
    request?: Uint8Array;
}
export declare class PostModifyEventSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
