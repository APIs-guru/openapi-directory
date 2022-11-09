import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetMetricWidgetImageActionEnum {
    GetMetricWidgetImage = "GetMetricWidgetImage"
}
export declare enum PostGetMetricWidgetImageVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostGetMetricWidgetImageQueryParams extends SpeakeasyBase {
    action: PostGetMetricWidgetImageActionEnum;
    version: PostGetMetricWidgetImageVersionEnum;
}
export declare class PostGetMetricWidgetImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetMetricWidgetImageRequest extends SpeakeasyBase {
    queryParams: PostGetMetricWidgetImageQueryParams;
    headers: PostGetMetricWidgetImageHeaders;
    request?: Uint8Array;
}
export declare class PostGetMetricWidgetImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
