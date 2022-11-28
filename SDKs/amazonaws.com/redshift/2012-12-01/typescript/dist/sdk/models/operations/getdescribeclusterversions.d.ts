import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeClusterVersionsActionEnum {
    DescribeClusterVersions = "DescribeClusterVersions"
}
export declare enum GetDescribeClusterVersionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeClusterVersionsQueryParams extends SpeakeasyBase {
    action: GetDescribeClusterVersionsActionEnum;
    clusterParameterGroupFamily?: string;
    clusterVersion?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeClusterVersionsVersionEnum;
}
export declare class GetDescribeClusterVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeClusterVersionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeClusterVersionsQueryParams;
    headers: GetDescribeClusterVersionsHeaders;
}
export declare class GetDescribeClusterVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
