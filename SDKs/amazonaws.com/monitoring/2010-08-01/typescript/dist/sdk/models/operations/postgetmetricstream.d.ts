import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetMetricStreamActionEnum {
    GetMetricStream = "GetMetricStream"
}
export declare enum PostGetMetricStreamVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostGetMetricStreamQueryParams extends SpeakeasyBase {
    action: PostGetMetricStreamActionEnum;
    version: PostGetMetricStreamVersionEnum;
}
export declare class PostGetMetricStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetMetricStreamRequest extends SpeakeasyBase {
    queryParams: PostGetMetricStreamQueryParams;
    headers: PostGetMetricStreamHeaders;
    request?: Uint8Array;
}
export declare class PostGetMetricStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
