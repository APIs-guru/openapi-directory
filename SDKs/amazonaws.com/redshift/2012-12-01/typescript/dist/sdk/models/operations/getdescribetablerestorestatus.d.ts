import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeTableRestoreStatusActionEnum {
    DescribeTableRestoreStatus = "DescribeTableRestoreStatus"
}
export declare enum GetDescribeTableRestoreStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeTableRestoreStatusQueryParams extends SpeakeasyBase {
    action: GetDescribeTableRestoreStatusActionEnum;
    clusterIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    tableRestoreRequestId?: string;
    version: GetDescribeTableRestoreStatusVersionEnum;
}
export declare class GetDescribeTableRestoreStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeTableRestoreStatusRequest extends SpeakeasyBase {
    queryParams: GetDescribeTableRestoreStatusQueryParams;
    headers: GetDescribeTableRestoreStatusHeaders;
}
export declare class GetDescribeTableRestoreStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
