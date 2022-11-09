import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeOptionGroupOptionsActionEnum {
    DescribeOptionGroupOptions = "DescribeOptionGroupOptions"
}
export declare enum GetDescribeOptionGroupOptionsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetDescribeOptionGroupOptionsQueryParams extends SpeakeasyBase {
    action: GetDescribeOptionGroupOptionsActionEnum;
    engineName: string;
    majorEngineVersion?: string;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeOptionGroupOptionsVersionEnum;
}
export declare class GetDescribeOptionGroupOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeOptionGroupOptionsRequest extends SpeakeasyBase {
    queryParams: GetDescribeOptionGroupOptionsQueryParams;
    headers: GetDescribeOptionGroupOptionsHeaders;
}
export declare class GetDescribeOptionGroupOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
