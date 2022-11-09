import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeEventCategoriesActionEnum {
    DescribeEventCategories = "DescribeEventCategories"
}
export declare enum PostDescribeEventCategoriesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeEventCategoriesQueryParams extends SpeakeasyBase {
    action: PostDescribeEventCategoriesActionEnum;
    version: PostDescribeEventCategoriesVersionEnum;
}
export declare class PostDescribeEventCategoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEventCategoriesRequest extends SpeakeasyBase {
    queryParams: PostDescribeEventCategoriesQueryParams;
    headers: PostDescribeEventCategoriesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEventCategoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
