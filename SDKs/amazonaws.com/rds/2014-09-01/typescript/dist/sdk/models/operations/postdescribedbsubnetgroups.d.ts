import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbSubnetGroupsActionEnum {
    DescribeDbSubnetGroups = "DescribeDBSubnetGroups"
}
export declare enum PostDescribeDbSubnetGroupsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeDbSubnetGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbSubnetGroupsActionEnum;
    version: PostDescribeDbSubnetGroupsVersionEnum;
}
export declare class PostDescribeDbSubnetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbSubnetGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbSubnetGroupsQueryParams;
    headers: PostDescribeDbSubnetGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbSubnetGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
