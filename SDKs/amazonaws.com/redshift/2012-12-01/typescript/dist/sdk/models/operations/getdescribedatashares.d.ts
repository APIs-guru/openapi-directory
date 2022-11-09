import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeDataSharesActionEnum {
    DescribeDataShares = "DescribeDataShares"
}
export declare enum GetDescribeDataSharesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeDataSharesQueryParams extends SpeakeasyBase {
    action: GetDescribeDataSharesActionEnum;
    dataShareArn?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeDataSharesVersionEnum;
}
export declare class GetDescribeDataSharesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDataSharesRequest extends SpeakeasyBase {
    queryParams: GetDescribeDataSharesQueryParams;
    headers: GetDescribeDataSharesHeaders;
}
export declare class GetDescribeDataSharesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
