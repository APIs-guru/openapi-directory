import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeClusterVersionsActionEnum {
    DescribeClusterVersions = "DescribeClusterVersions"
}
export declare enum PostDescribeClusterVersionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeClusterVersionsQueryParams extends SpeakeasyBase {
    action: PostDescribeClusterVersionsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeClusterVersionsVersionEnum;
}
export declare class PostDescribeClusterVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClusterVersionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeClusterVersionsQueryParams;
    headers: PostDescribeClusterVersionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClusterVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
