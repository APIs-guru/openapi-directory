import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeEventSubscriptionsActionEnum {
    DescribeEventSubscriptions = "DescribeEventSubscriptions"
}
export declare enum GetDescribeEventSubscriptionsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetDescribeEventSubscriptionsQueryParams extends SpeakeasyBase {
    action: GetDescribeEventSubscriptionsActionEnum;
    marker?: string;
    maxRecords?: number;
    subscriptionName?: string;
    version: GetDescribeEventSubscriptionsVersionEnum;
}
export declare class GetDescribeEventSubscriptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEventSubscriptionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeEventSubscriptionsQueryParams;
    headers: GetDescribeEventSubscriptionsHeaders;
}
export declare class GetDescribeEventSubscriptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
