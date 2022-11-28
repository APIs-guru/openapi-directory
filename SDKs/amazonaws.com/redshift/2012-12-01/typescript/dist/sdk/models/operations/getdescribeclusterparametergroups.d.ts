import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeClusterParameterGroupsActionEnum {
    DescribeClusterParameterGroups = "DescribeClusterParameterGroups"
}
export declare enum GetDescribeClusterParameterGroupsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeClusterParameterGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeClusterParameterGroupsActionEnum;
    marker?: string;
    maxRecords?: number;
    parameterGroupName?: string;
    tagKeys?: string[];
    tagValues?: string[];
    version: GetDescribeClusterParameterGroupsVersionEnum;
}
export declare class GetDescribeClusterParameterGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeClusterParameterGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeClusterParameterGroupsQueryParams;
    headers: GetDescribeClusterParameterGroupsHeaders;
}
export declare class GetDescribeClusterParameterGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
