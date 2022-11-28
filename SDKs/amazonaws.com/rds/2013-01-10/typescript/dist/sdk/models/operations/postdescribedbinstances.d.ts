import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDbInstancesActionEnum {
    DescribeDbInstances = "DescribeDBInstances"
}
export declare enum PostDescribeDbInstancesVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class PostDescribeDbInstancesQueryParams extends SpeakeasyBase {
    action: PostDescribeDbInstancesActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbInstancesVersionEnum;
}
export declare class PostDescribeDbInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbInstancesRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbInstancesQueryParams;
    headers: PostDescribeDbInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
