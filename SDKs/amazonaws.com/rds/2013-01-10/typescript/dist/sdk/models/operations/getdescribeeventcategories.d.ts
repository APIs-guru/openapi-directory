import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeEventCategoriesActionEnum {
    DescribeEventCategories = "DescribeEventCategories"
}
export declare enum GetDescribeEventCategoriesVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetDescribeEventCategoriesQueryParams extends SpeakeasyBase {
    action: GetDescribeEventCategoriesActionEnum;
    sourceType?: string;
    version: GetDescribeEventCategoriesVersionEnum;
}
export declare class GetDescribeEventCategoriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEventCategoriesRequest extends SpeakeasyBase {
    queryParams: GetDescribeEventCategoriesQueryParams;
    headers: GetDescribeEventCategoriesHeaders;
}
export declare class GetDescribeEventCategoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
