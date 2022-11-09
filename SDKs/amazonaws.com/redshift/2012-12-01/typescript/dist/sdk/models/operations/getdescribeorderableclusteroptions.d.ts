import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeOrderableClusterOptionsActionEnum {
    DescribeOrderableClusterOptions = "DescribeOrderableClusterOptions"
}
export declare enum GetDescribeOrderableClusterOptionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeOrderableClusterOptionsQueryParams extends SpeakeasyBase {
    action: GetDescribeOrderableClusterOptionsActionEnum;
    clusterVersion?: string;
    marker?: string;
    maxRecords?: number;
    nodeType?: string;
    version: GetDescribeOrderableClusterOptionsVersionEnum;
}
export declare class GetDescribeOrderableClusterOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeOrderableClusterOptionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeOrderableClusterOptionsQueryParams;
    headers: GetDescribeOrderableClusterOptionsHeaders;
}
export declare class GetDescribeOrderableClusterOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
