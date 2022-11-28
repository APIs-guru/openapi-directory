import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartFaceDetectionXAmzTargetEnum {
    RekognitionServiceStartFaceDetection = "RekognitionService.StartFaceDetection"
}
export declare class StartFaceDetectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartFaceDetectionXAmzTargetEnum;
}
export declare class StartFaceDetectionRequest extends SpeakeasyBase {
    headers: StartFaceDetectionHeaders;
    request: shared.StartFaceDetectionRequest;
}
export declare class StartFaceDetectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    idempotentParameterMismatchException?: any;
    internalServerError?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    startFaceDetectionResponse?: shared.StartFaceDetectionResponse;
    statusCode: number;
    throttlingException?: any;
    videoTooLargeException?: any;
}
