import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeClusterParametersActionEnum {
    DescribeClusterParameters = "DescribeClusterParameters"
}
export declare enum GetDescribeClusterParametersVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeClusterParametersQueryParams extends SpeakeasyBase {
    action: GetDescribeClusterParametersActionEnum;
    marker?: string;
    maxRecords?: number;
    parameterGroupName: string;
    source?: string;
    version: GetDescribeClusterParametersVersionEnum;
}
export declare class GetDescribeClusterParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeClusterParametersRequest extends SpeakeasyBase {
    queryParams: GetDescribeClusterParametersQueryParams;
    headers: GetDescribeClusterParametersHeaders;
}
export declare class GetDescribeClusterParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
