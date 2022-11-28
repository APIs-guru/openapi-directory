import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeDefaultClusterParametersActionEnum {
    DescribeDefaultClusterParameters = "DescribeDefaultClusterParameters"
}
export declare enum GetDescribeDefaultClusterParametersVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeDefaultClusterParametersQueryParams extends SpeakeasyBase {
    action: GetDescribeDefaultClusterParametersActionEnum;
    marker?: string;
    maxRecords?: number;
    parameterGroupFamily: string;
    version: GetDescribeDefaultClusterParametersVersionEnum;
}
export declare class GetDescribeDefaultClusterParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDefaultClusterParametersRequest extends SpeakeasyBase {
    queryParams: GetDescribeDefaultClusterParametersQueryParams;
    headers: GetDescribeDefaultClusterParametersHeaders;
}
export declare class GetDescribeDefaultClusterParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
