import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetStartMetricStreamsActionEnum {
    StartMetricStreams = "StartMetricStreams"
}
export declare enum GetStartMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetStartMetricStreamsQueryParams extends SpeakeasyBase {
    action: GetStartMetricStreamsActionEnum;
    names: string[];
    version: GetStartMetricStreamsVersionEnum;
}
export declare class GetStartMetricStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStartMetricStreamsRequest extends SpeakeasyBase {
    queryParams: GetStartMetricStreamsQueryParams;
    headers: GetStartMetricStreamsHeaders;
}
export declare class GetStartMetricStreamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
