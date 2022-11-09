import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeResizeActionEnum {
    DescribeResize = "DescribeResize"
}
export declare enum GetDescribeResizeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeResizeQueryParams extends SpeakeasyBase {
    action: GetDescribeResizeActionEnum;
    clusterIdentifier: string;
    version: GetDescribeResizeVersionEnum;
}
export declare class GetDescribeResizeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeResizeRequest extends SpeakeasyBase {
    queryParams: GetDescribeResizeQueryParams;
    headers: GetDescribeResizeHeaders;
}
export declare class GetDescribeResizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
