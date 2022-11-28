import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeDbSecurityGroupsActionEnum {
    DescribeDbSecurityGroups = "DescribeDBSecurityGroups"
}
export declare enum GetDescribeDbSecurityGroupsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetDescribeDbSecurityGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeDbSecurityGroupsActionEnum;
    dbSecurityGroupName?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeDbSecurityGroupsVersionEnum;
}
export declare class GetDescribeDbSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDbSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeDbSecurityGroupsQueryParams;
    headers: GetDescribeDbSecurityGroupsHeaders;
}
export declare class GetDescribeDbSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
