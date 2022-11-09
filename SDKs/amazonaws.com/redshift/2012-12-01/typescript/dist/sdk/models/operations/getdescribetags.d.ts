import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeTagsActionEnum {
    DescribeTags = "DescribeTags"
}
export declare enum GetDescribeTagsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeTagsQueryParams extends SpeakeasyBase {
    action: GetDescribeTagsActionEnum;
    marker?: string;
    maxRecords?: number;
    resourceName?: string;
    resourceType?: string;
    tagKeys?: string[];
    tagValues?: string[];
    version: GetDescribeTagsVersionEnum;
}
export declare class GetDescribeTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeTagsRequest extends SpeakeasyBase {
    queryParams: GetDescribeTagsQueryParams;
    headers: GetDescribeTagsHeaders;
}
export declare class GetDescribeTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
