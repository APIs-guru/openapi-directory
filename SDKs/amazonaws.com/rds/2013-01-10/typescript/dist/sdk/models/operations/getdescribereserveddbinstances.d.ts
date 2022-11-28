import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeReservedDbInstancesActionEnum {
    DescribeReservedDbInstances = "DescribeReservedDBInstances"
}
export declare enum GetDescribeReservedDbInstancesVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetDescribeReservedDbInstancesQueryParams extends SpeakeasyBase {
    action: GetDescribeReservedDbInstancesActionEnum;
    dbInstanceClass?: string;
    duration?: string;
    marker?: string;
    maxRecords?: number;
    multiAz?: boolean;
    offeringType?: string;
    productDescription?: string;
    reservedDbInstanceId?: string;
    reservedDbInstancesOfferingId?: string;
    version: GetDescribeReservedDbInstancesVersionEnum;
}
export declare class GetDescribeReservedDbInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeReservedDbInstancesRequest extends SpeakeasyBase {
    queryParams: GetDescribeReservedDbInstancesQueryParams;
    headers: GetDescribeReservedDbInstancesHeaders;
}
export declare class GetDescribeReservedDbInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
