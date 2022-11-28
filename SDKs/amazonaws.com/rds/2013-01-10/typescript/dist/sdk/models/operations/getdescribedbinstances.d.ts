import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeDbInstancesActionEnum {
    DescribeDbInstances = "DescribeDBInstances"
}
export declare enum GetDescribeDbInstancesVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetDescribeDbInstancesQueryParams extends SpeakeasyBase {
    action: GetDescribeDbInstancesActionEnum;
    dbInstanceIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeDbInstancesVersionEnum;
}
export declare class GetDescribeDbInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDbInstancesRequest extends SpeakeasyBase {
    queryParams: GetDescribeDbInstancesQueryParams;
    headers: GetDescribeDbInstancesHeaders;
}
export declare class GetDescribeDbInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
