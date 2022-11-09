import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbParameterGroupsActionEnum {
    DescribeDbParameterGroups = "DescribeDBParameterGroups"
}
export declare enum PostDescribeDbParameterGroupsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeDbParameterGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbParameterGroupsActionEnum;
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
