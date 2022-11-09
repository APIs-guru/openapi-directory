import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetStopMetricStreamsActionEnum {
    StopMetricStreams = "StopMetricStreams"
}
export declare enum GetStopMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetStopMetricStreamsQueryParams extends SpeakeasyBase {
    action: GetStopMetricStreamsActionEnum;
    names: string[];
    version: GetStopMetricStreamsVersionEnum;
}
export declare class GetStopMetricStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStopMetricStreamsRequest extends SpeakeasyBase {
    queryParams: GetStopMetricStreamsQueryParams;
    headers: GetStopMetricStreamsHeaders;
}
export declare class GetStopMetricStreamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
