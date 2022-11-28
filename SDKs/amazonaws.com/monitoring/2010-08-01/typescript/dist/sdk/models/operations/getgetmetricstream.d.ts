import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetMetricStreamActionEnum {
    GetMetricStream = "GetMetricStream"
}
export declare enum GetGetMetricStreamVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetGetMetricStreamQueryParams extends SpeakeasyBase {
    action: GetGetMetricStreamActionEnum;
    name: string;
    version: GetGetMetricStreamVersionEnum;
}
export declare class GetGetMetricStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetMetricStreamRequest extends SpeakeasyBase {
    queryParams: GetGetMetricStreamQueryParams;
    headers: GetGetMetricStreamHeaders;
}
export declare class GetGetMetricStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
