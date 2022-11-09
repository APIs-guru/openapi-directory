import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeEventSubscriptionsActionEnum {
    DescribeEventSubscriptions = "DescribeEventSubscriptions"
}
export declare enum PostDescribeEventSubscriptionsVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class PostDescribeEventSubscriptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeEventSubscriptionsActionEnum;
    marker?: string;
    maxRecords?: string;
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
