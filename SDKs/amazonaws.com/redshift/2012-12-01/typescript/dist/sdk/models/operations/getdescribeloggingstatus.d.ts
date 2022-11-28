import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeLoggingStatusActionEnum {
    DescribeLoggingStatus = "DescribeLoggingStatus"
}
export declare enum GetDescribeLoggingStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeLoggingStatusQueryParams extends SpeakeasyBase {
    action: GetDescribeLoggingStatusActionEnum;
    clusterIdentifier: string;
    version: GetDescribeLoggingStatusVersionEnum;
}
export declare class GetDescribeLoggingStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeLoggingStatusRequest extends SpeakeasyBase {
    queryParams: GetDescribeLoggingStatusQueryParams;
    headers: GetDescribeLoggingStatusHeaders;
}
export declare class GetDescribeLoggingStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
