import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostStartMetricStreamsActionEnum {
    StartMetricStreams = "StartMetricStreams"
}
export declare enum PostStartMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostStartMetricStreamsQueryParams extends SpeakeasyBase {
    action: PostStartMetricStreamsActionEnum;
    version: PostStartMetricStreamsVersionEnum;
}
export declare class PostStartMetricStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStartMetricStreamsRequest extends SpeakeasyBase {
    queryParams: PostStartMetricStreamsQueryParams;
    headers: PostStartMetricStreamsHeaders;
    request?: Uint8Array;
}
export declare class PostStartMetricStreamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
