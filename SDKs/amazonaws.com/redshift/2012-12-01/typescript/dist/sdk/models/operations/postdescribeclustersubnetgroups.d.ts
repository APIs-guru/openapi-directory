import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeClusterSubnetGroupsActionEnum {
    DescribeClusterSubnetGroups = "DescribeClusterSubnetGroups"
}
export declare enum PostDescribeClusterSubnetGroupsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeClusterSubnetGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeClusterSubnetGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeClusterSubnetGroupsVersionEnum;
}
export declare class PostDescribeClusterSubnetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClusterSubnetGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeClusterSubnetGroupsQueryParams;
    headers: PostDescribeClusterSubnetGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClusterSubnetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
