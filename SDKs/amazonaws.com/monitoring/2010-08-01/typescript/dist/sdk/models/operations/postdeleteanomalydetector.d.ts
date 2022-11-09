import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteAnomalyDetectorActionEnum {
    DeleteAnomalyDetector = "DeleteAnomalyDetector"
}
export declare enum PostDeleteAnomalyDetectorVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDeleteAnomalyDetectorQueryParams extends SpeakeasyBase {
    action: PostDeleteAnomalyDetectorActionEnum;
    version: PostDeleteAnomalyDetectorVersionEnum;
}
export declare class PostDeleteAnomalyDetectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteAnomalyDetectorRequest extends SpeakeasyBase {
    queryParams: PostDeleteAnomalyDetectorQueryParams;
    headers: PostDeleteAnomalyDetectorHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteAnomalyDetectorResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
