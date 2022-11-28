import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFaceDetectionQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetFaceDetectionXAmzTargetEnum {
    RekognitionServiceGetFaceDetection = "RekognitionService.GetFaceDetection"
}
export declare class GetFaceDetectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFaceDetectionXAmzTargetEnum;
}
export declare class GetFaceDetectionRequest extends SpeakeasyBase {
    queryParams: GetFaceDetectionQueryParams;
    headers: GetFaceDetectionHeaders;
    request: shared.GetFaceDetectionRequest;
}
export declare class GetFaceDetectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getFaceDetectionResponse?: shared.GetFaceDetectionResponse;
    internalServerError?: any;
    invalidPaginationTokenException?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
