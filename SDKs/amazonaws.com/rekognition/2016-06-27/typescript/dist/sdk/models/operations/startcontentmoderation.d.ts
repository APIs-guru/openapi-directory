import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartContentModerationXAmzTargetEnum {
    RekognitionServiceStartContentModeration = "RekognitionService.StartContentModeration"
}
export declare class StartContentModerationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartContentModerationXAmzTargetEnum;
}
export declare class StartContentModerationRequest extends SpeakeasyBase {
    headers: StartContentModerationHeaders;
    request: shared.StartContentModerationRequest;
}
export declare class StartContentModerationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    idempotentParameterMismatchException?: any;
    internalServerError?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    startContentModerationResponse?: shared.StartContentModerationResponse;
    statusCode: number;
    throttlingException?: any;
    videoTooLargeException?: any;
}
