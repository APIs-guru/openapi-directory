import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeOptionGroupsActionEnum {
    DescribeOptionGroups = "DescribeOptionGroups"
}
export declare enum PostDescribeOptionGroupsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class PostDescribeOptionGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeOptionGroupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeOptionGroupsVersionEnum;
}
export declare class PostDescribeOptionGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeOptionGroupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeOptionGroupsQueryParams;
    headers: PostDescribeOptionGroupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeOptionGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
