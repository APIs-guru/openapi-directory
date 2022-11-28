import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeClusterSecurityGroupsActionEnum {
    DescribeClusterSecurityGroups = "DescribeClusterSecurityGroups"
}
export declare enum PostDescribeClusterSecurityGroupsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeClusterSecurityGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeClusterSecurityGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeClusterSecurityGroupsVersionEnum;
}
export declare class PostDescribeClusterSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClusterSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeClusterSecurityGroupsQueryParams;
    headers: PostDescribeClusterSecurityGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClusterSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
