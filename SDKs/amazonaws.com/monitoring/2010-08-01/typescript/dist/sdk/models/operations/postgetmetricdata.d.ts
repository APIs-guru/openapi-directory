import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostGetMetricDataActionEnum {
    GetMetricData = "GetMetricData"
}
export declare enum PostGetMetricDataVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostGetMetricDataQueryParams extends SpeakeasyBase {
    action: PostGetMetricDataActionEnum;
    maxDatapoints?: string;
    nextToken?: string;
    version: PostGetMetricDataVersionEnum;
}
export declare class PostGetMetricDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetMetricDataRequest extends SpeakeasyBase {
    queryParams: PostGetMetricDataQueryParams;
    headers: PostGetMetricDataHeaders;
    request?: Uint8Array;
}
export declare class PostGetMetricDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
