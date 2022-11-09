import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeReservedDbInstancesActionEnum {
    DescribeReservedDbInstances = "DescribeReservedDBInstances"
}
export declare enum PostDescribeReservedDbInstancesVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class PostDescribeReservedDbInstancesQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedDbInstancesActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeReservedDbInstancesVersionEnum;
}
export declare class PostDescribeReservedDbInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeReservedDbInstancesRequest extends SpeakeasyBase {
    queryParams: PostDescribeReservedDbInstancesQueryParams;
    headers: PostDescribeReservedDbInstancesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeReservedDbInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
