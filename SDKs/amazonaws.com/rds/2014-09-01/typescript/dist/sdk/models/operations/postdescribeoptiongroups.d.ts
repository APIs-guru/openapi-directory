import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeOptionGroupsActionEnum {
    DescribeOptionGroups = "DescribeOptionGroups"
}
export declare enum PostDescribeOptionGroupsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeOptionGroupsQueryParams extends SpeakeasyBase {
    action: PostDescribeOptionGroupsActionEnum;
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
