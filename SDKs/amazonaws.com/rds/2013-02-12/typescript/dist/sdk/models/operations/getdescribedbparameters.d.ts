import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeDbParametersActionEnum {
    DescribeDbParameters = "DescribeDBParameters"
}
export declare enum GetDescribeDbParametersVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class GetDescribeDbParametersQueryParams extends SpeakeasyBase {
    action: GetDescribeDbParametersActionEnum;
    dbParameterGroupName: string;
    marker?: string;
    maxRecords?: number;
    source?: string;
    version: GetDescribeDbParametersVersionEnum;
}
export declare class GetDescribeDbParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeDbParametersRequest extends SpeakeasyBase {
    queryParams: GetDescribeDbParametersQueryParams;
    headers: GetDescribeDbParametersHeaders;
}
export declare class GetDescribeDbParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
