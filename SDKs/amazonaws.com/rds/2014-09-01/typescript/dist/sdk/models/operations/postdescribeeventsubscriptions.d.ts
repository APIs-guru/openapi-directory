import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeEventSubscriptionsActionEnum {
    DescribeEventSubscriptions = "DescribeEventSubscriptions"
}
export declare enum PostDescribeEventSubscriptionsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeEventSubscriptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeEventSubscriptionsActionEnum;
    version: PostDescribeEventSubscriptionsVersionEnum;
}
export declare class PostDescribeEventSubscriptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEventSubscriptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeEventSubscriptionsQueryParams;
    headers: PostDescribeEventSubscriptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEventSubscriptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
