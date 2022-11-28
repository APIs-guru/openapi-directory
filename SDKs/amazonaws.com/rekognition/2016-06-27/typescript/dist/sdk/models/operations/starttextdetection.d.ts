import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartTextDetectionXAmzTargetEnum {
    RekognitionServiceStartTextDetection = "RekognitionService.StartTextDetection"
}
export declare class StartTextDetectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTextDetectionXAmzTargetEnum;
}
export declare class StartTextDetectionRequest extends SpeakeasyBase {
    headers: StartTextDetectionHeaders;
    request: shared.StartTextDetectionRequest;
}
export declare class StartTextDetectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    idempotentParameterMismatchException?: any;
    internalServerError?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    startTextDetectionResponse?: shared.StartTextDetectionResponse;
    statusCode: number;
    throttlingException?: any;
    videoTooLargeException?: any;
}
