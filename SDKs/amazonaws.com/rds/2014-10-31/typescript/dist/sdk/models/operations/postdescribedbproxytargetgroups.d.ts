import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbProxyTargetGroupsActionEnum {
    DescribeDbProxyTargetGroups = "DescribeDBProxyTargetGroups"
}
export declare enum PostDescribeDbProxyTargetGroupsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbProxyTargetGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbProxyTargetGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbProxyTargetGroupsVersionEnum;
}
export declare class PostDescribeDbProxyTargetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbProxyTargetGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbProxyTargetGroupsQueryParams;
    headers: PostDescribeDbProxyTargetGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbProxyTargetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
