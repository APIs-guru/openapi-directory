import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeClusterSubnetGroupsActionEnum {
    DescribeClusterSubnetGroups = "DescribeClusterSubnetGroups"
}
export declare enum GetDescribeClusterSubnetGroupsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeClusterSubnetGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeClusterSubnetGroupsActionEnum;
    clusterSubnetGroupName?: string;
    marker?: string;
    maxRecords?: number;
    tagKeys?: string[];
    tagValues?: string[];
    version: GetDescribeClusterSubnetGroupsVersionEnum;
}
export declare class GetDescribeClusterSubnetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeClusterSubnetGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeClusterSubnetGroupsQueryParams;
    headers: GetDescribeClusterSubnetGroupsHeaders;
}
export declare class GetDescribeClusterSubnetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
