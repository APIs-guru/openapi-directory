import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeClusterParameterGroupsActionEnum {
    DescribeClusterParameterGroups = "DescribeClusterParameterGroups"
}
export declare enum PostDescribeClusterParameterGroupsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeClusterParameterGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeClusterParameterGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeClusterParameterGroupsVersionEnum;
}
export declare class PostDescribeClusterParameterGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClusterParameterGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeClusterParameterGroupsQueryParams;
    headers: PostDescribeClusterParameterGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClusterParameterGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
