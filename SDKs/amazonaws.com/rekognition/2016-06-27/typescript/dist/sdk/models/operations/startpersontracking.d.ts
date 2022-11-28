import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartPersonTrackingXAmzTargetEnum {
    RekognitionServiceStartPersonTracking = "RekognitionService.StartPersonTracking"
}
export declare class StartPersonTrackingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartPersonTrackingXAmzTargetEnum;
}
export declare class StartPersonTrackingRequest extends SpeakeasyBase {
    headers: StartPersonTrackingHeaders;
    request: shared.StartPersonTrackingRequest;
}
export declare class StartPersonTrackingResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    idempotentParameterMismatchException?: any;
    internalServerError?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    startPersonTrackingResponse?: shared.StartPersonTrackingResponse;
    statusCode: number;
    throttlingException?: any;
    videoTooLargeException?: any;
}
