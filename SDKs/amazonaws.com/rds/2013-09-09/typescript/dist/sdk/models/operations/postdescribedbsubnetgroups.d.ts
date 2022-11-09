import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeDbSubnetGroupsActionEnum {
    DescribeDbSubnetGroups = "DescribeDBSubnetGroups"
}
export declare enum PostDescribeDbSubnetGroupsVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class PostDescribeDbSubnetGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbSubnetGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
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
