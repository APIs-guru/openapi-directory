import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeDbEngineVersionsActionEnum {
    DescribeDbEngineVersions = "DescribeDBEngineVersions"
}
export declare enum GetDescribeDbEngineVersionsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetDescribeDbEngineVersionsQueryParams extends SpeakeasyBase {
    action: GetDescribeDbEngineVersionsActionEnum;
    dbParameterGroupFamily?: string;
    defaultOnly?: boolean;
    engine?: string;
    engineVersion?: string;
    listSupportedCharacterSets?: boolean;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeDbEngineVersionsVersionEnum;
}
export declare class GetDescribeDbEngineVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDbEngineVersionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeDbEngineVersionsQueryParams;
    headers: GetDescribeDbEngineVersionsHeaders;
}
export declare class GetDescribeDbEngineVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
