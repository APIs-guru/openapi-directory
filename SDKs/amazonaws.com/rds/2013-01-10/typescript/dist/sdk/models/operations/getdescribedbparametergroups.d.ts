import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeDbParameterGroupsActionEnum {
    DescribeDbParameterGroups = "DescribeDBParameterGroups"
}
export declare enum GetDescribeDbParameterGroupsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetDescribeDbParameterGroupsQueryParams extends SpeakeasyBase {
    action: GetDescribeDbParameterGroupsActionEnum;
    dbParameterGroupName?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeDbParameterGroupsVersionEnum;
}
export declare class GetDescribeDbParameterGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDbParameterGroupsRequest extends SpeakeasyBase {
    queryParams: GetDescribeDbParameterGroupsQueryParams;
    headers: GetDescribeDbParameterGroupsHeaders;
}
export declare class GetDescribeDbParameterGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
