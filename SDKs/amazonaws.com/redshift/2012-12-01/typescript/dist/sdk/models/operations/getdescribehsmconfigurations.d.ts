import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeHsmConfigurationsActionEnum {
    DescribeHsmConfigurations = "DescribeHsmConfigurations"
}
export declare enum GetDescribeHsmConfigurationsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeHsmConfigurationsQueryParams extends SpeakeasyBase {
    action: GetDescribeHsmConfigurationsActionEnum;
    hsmConfigurationIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    tagKeys?: string[];
    tagValues?: string[];
    version: GetDescribeHsmConfigurationsVersionEnum;
}
export declare class GetDescribeHsmConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeHsmConfigurationsRequest extends SpeakeasyBase {
    queryParams: GetDescribeHsmConfigurationsQueryParams;
    headers: GetDescribeHsmConfigurationsHeaders;
}
export declare class GetDescribeHsmConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
