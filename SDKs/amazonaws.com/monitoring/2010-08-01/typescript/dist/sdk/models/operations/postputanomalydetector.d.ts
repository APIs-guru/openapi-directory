import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPutAnomalyDetectorActionEnum {
    PutAnomalyDetector = "PutAnomalyDetector"
}
export declare enum PostPutAnomalyDetectorVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostPutAnomalyDetectorQueryParams extends SpeakeasyBase {
    action: PostPutAnomalyDetectorActionEnum;
    version: PostPutAnomalyDetectorVersionEnum;
}
export declare class PostPutAnomalyDetectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutAnomalyDetectorRequest extends SpeakeasyBase {
    queryParams: PostPutAnomalyDetectorQueryParams;
    headers: PostPutAnomalyDetectorHeaders;
    request?: Uint8Array;
}
export declare class PostPutAnomalyDetectorResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
