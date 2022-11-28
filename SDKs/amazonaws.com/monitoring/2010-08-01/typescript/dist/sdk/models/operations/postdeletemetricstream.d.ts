import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteMetricStreamActionEnum {
    DeleteMetricStream = "DeleteMetricStream"
}
export declare enum PostDeleteMetricStreamVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDeleteMetricStreamQueryParams extends SpeakeasyBase {
    action: PostDeleteMetricStreamActionEnum;
    version: PostDeleteMetricStreamVersionEnum;
}
export declare class PostDeleteMetricStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteMetricStreamRequest extends SpeakeasyBase {
    queryParams: PostDeleteMetricStreamQueryParams;
    headers: PostDeleteMetricStreamHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteMetricStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
