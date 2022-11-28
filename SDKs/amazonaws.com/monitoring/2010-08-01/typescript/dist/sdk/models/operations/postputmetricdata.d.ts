import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPutMetricDataActionEnum {
    PutMetricData = "PutMetricData"
}
export declare enum PostPutMetricDataVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostPutMetricDataQueryParams extends SpeakeasyBase {
    action: PostPutMetricDataActionEnum;
    version: PostPutMetricDataVersionEnum;
}
export declare class PostPutMetricDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutMetricDataRequest extends SpeakeasyBase {
    queryParams: PostPutMetricDataQueryParams;
    headers: PostPutMetricDataHeaders;
    request?: Uint8Array;
}
export declare class PostPutMetricDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
