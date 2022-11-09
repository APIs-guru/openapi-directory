import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetMetricWidgetImageActionEnum {
    GetMetricWidgetImage = "GetMetricWidgetImage"
}
export declare enum GetGetMetricWidgetImageVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetGetMetricWidgetImageQueryParams extends SpeakeasyBase {
    action: GetGetMetricWidgetImageActionEnum;
    metricWidget: string;
    outputFormat?: string;
    version: GetGetMetricWidgetImageVersionEnum;
}
export declare class GetGetMetricWidgetImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetMetricWidgetImageRequest extends SpeakeasyBase {
    queryParams: GetGetMetricWidgetImageQueryParams;
    headers: GetGetMetricWidgetImageHeaders;
}
export declare class GetGetMetricWidgetImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
