import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPutMetricStreamActionEnum {
    PutMetricStream = "PutMetricStream"
}
export declare enum PostPutMetricStreamVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostPutMetricStreamQueryParams extends SpeakeasyBase {
    action: PostPutMetricStreamActionEnum;
    version: PostPutMetricStreamVersionEnum;
}
export declare class PostPutMetricStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutMetricStreamRequest extends SpeakeasyBase {
    queryParams: PostPutMetricStreamQueryParams;
    headers: PostPutMetricStreamHeaders;
    request?: Uint8Array;
}
export declare class PostPutMetricStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
