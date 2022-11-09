import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeEngineDefaultParametersActionEnum {
    DescribeEngineDefaultParameters = "DescribeEngineDefaultParameters"
}
export declare enum GetDescribeEngineDefaultParametersVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetDescribeEngineDefaultParametersQueryParams extends SpeakeasyBase {
    action: GetDescribeEngineDefaultParametersActionEnum;
    dbParameterGroupFamily: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeEngineDefaultParametersVersionEnum;
}
export declare class GetDescribeEngineDefaultParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEngineDefaultParametersRequest extends SpeakeasyBase {
    queryParams: GetDescribeEngineDefaultParametersQueryParams;
    headers: GetDescribeEngineDefaultParametersHeaders;
}
export declare class GetDescribeEngineDefaultParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
