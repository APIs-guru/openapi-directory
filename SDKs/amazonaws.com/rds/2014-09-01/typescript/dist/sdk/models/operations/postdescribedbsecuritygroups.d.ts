import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDbSecurityGroupsActionEnum {
    DescribeDbSecurityGroups = "DescribeDBSecurityGroups"
}
export declare enum PostDescribeDbSecurityGroupsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeDbSecurityGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbSecurityGroupsActionEnum;
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
