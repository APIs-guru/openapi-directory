import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartFaceSearchXAmzTargetEnum {
    RekognitionServiceStartFaceSearch = "RekognitionService.StartFaceSearch"
}
export declare class StartFaceSearchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartFaceSearchXAmzTargetEnum;
}
export declare class StartFaceSearchRequest extends SpeakeasyBase {
    headers: StartFaceSearchHeaders;
    request: shared.StartFaceSearchRequest;
}
export declare class StartFaceSearchResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    idempotentParameterMismatchException?: any;
    internalServerError?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    startFaceSearchResponse?: shared.StartFaceSearchResponse;
    statusCode: number;
    throttlingException?: any;
    videoTooLargeException?: any;
}
