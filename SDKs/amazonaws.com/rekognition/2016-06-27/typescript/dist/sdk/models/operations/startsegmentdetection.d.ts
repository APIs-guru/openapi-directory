import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartSegmentDetectionXAmzTargetEnum {
    RekognitionServiceStartSegmentDetection = "RekognitionService.StartSegmentDetection"
}
export declare class StartSegmentDetectionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSegmentDetectionXAmzTargetEnum;
}
export declare class StartSegmentDetectionRequest extends SpeakeasyBase {
    headers: StartSegmentDetectionHeaders;
    request: shared.StartSegmentDetectionRequest;
}
export declare class StartSegmentDetectionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    idempotentParameterMismatchException?: any;
    internalServerError?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    startSegmentDetectionResponse?: shared.StartSegmentDetectionResponse;
    statusCode: number;
    throttlingException?: any;
    videoTooLargeException?: any;
}
