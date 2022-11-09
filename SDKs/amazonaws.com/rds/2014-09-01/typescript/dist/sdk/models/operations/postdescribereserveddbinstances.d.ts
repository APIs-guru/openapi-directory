import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeReservedDbInstancesActionEnum {
    DescribeReservedDbInstances = "DescribeReservedDBInstances"
}
export declare enum PostDescribeReservedDbInstancesVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeReservedDbInstancesQueryParams extends SpeakeasyBase {
    action: PostDescribeReservedDbInstancesActionEnum;
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
