import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDbSecurityGroupsActionEnum {
    DescribeDbSecurityGroups = "DescribeDBSecurityGroups"
}
export declare enum PostDescribeDbSecurityGroupsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbSecurityGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbSecurityGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbSecurityGroupsVersionEnum;
}
export declare class PostDescribeDbSecurityGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbSecurityGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbSecurityGroupsQueryParams;
    headers: PostDescribeDbSecurityGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbSecurityGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
