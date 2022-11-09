import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostStopMetricStreamsActionEnum {
    StopMetricStreams = "StopMetricStreams"
}
export declare enum PostStopMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostStopMetricStreamsQueryParams extends SpeakeasyBase {
    action: PostStopMetricStreamsActionEnum;
    version: PostStopMetricStreamsVersionEnum;
}
export declare class PostStopMetricStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStopMetricStreamsRequest extends SpeakeasyBase {
    queryParams: PostStopMetricStreamsQueryParams;
    headers: PostStopMetricStreamsHeaders;
    request?: Uint8Array;
}
export declare class PostStopMetricStreamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
