import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartLabelDetectionXAmzTargetEnum {
    RekognitionServiceStartLabelDetection = "RekognitionService.StartLabelDetection"
}
export declare class StartLabelDetectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartLabelDetectionXAmzTargetEnum;
}
export declare class StartLabelDetectionRequest extends SpeakeasyBase {
    headers: StartLabelDetectionHeaders;
    request: shared.StartLabelDetectionRequest;
}
export declare class StartLabelDetectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    idempotentParameterMismatchException?: any;
    internalServerError?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    startLabelDetectionResponse?: shared.StartLabelDetectionResponse;
    statusCode: number;
    throttlingException?: any;
    videoTooLargeException?: any;
}
