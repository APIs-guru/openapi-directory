import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetListMetricStreamsActionEnum {
    ListMetricStreams = "ListMetricStreams"
}
export declare enum GetListMetricStreamsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetListMetricStreamsQueryParams extends SpeakeasyBase {
    action: GetListMetricStreamsActionEnum;
    maxResults?: number;
    nextToken?: string;
    version: GetListMetricStreamsVersionEnum;
}
export declare class GetListMetricStreamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListMetricStreamsRequest extends SpeakeasyBase {
    queryParams: GetListMetricStreamsQueryParams;
    headers: GetListMetricStreamsHeaders;
}
export declare class GetListMetricStreamsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
