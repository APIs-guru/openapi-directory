import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeDbSubnetGroupsActionEnum {
    DescribeDbSubnetGroups = "DescribeDBSubnetGroups"
}
export declare enum GetDescribeDbSubnetGroupsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetDescribeDbSubnetGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeDbSubnetGroupsActionEnum;
    dbSubnetGroupName?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeDbSubnetGroupsVersionEnum;
}
export declare class GetDescribeDbSubnetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDbSubnetGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeDbSubnetGroupsQueryParams;
    headers: GetDescribeDbSubnetGroupsHeaders;
}
export declare class GetDescribeDbSubnetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
