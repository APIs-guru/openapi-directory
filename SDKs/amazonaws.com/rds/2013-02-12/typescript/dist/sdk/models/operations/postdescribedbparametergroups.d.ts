import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbParameterGroupsActionEnum {
    DescribeDbParameterGroups = "DescribeDBParameterGroups"
}
export declare enum PostDescribeDbParameterGroupsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class PostDescribeDbParameterGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbParameterGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbParameterGroupsVersionEnum;
}
export declare class PostDescribeDbParameterGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbParameterGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbParameterGroupsQueryParams;
    headers: PostDescribeDbParameterGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbParameterGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
