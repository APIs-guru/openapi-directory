import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeClusterSecurityGroupsActionEnum {
    DescribeClusterSecurityGroups = "DescribeClusterSecurityGroups"
}
export declare enum GetDescribeClusterSecurityGroupsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeClusterSecurityGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeClusterSecurityGroupsActionEnum;
    clusterSecurityGroupName?: string;
    marker?: string;
    maxRecords?: number;
    tagKeys?: string[];
    tagValues?: string[];
    version: GetDescribeClusterSecurityGroupsVersionEnum;
}
export declare class GetDescribeClusterSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeClusterSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeClusterSecurityGroupsQueryParams;
    headers: GetDescribeClusterSecurityGroupsHeaders;
}
export declare class GetDescribeClusterSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
