import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartCelebrityRecognitionXAmzTargetEnum {
    RekognitionServiceStartCelebrityRecognition = "RekognitionService.StartCelebrityRecognition"
}
export declare class StartCelebrityRecognitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartCelebrityRecognitionXAmzTargetEnum;
}
export declare class StartCelebrityRecognitionRequest extends SpeakeasyBase {
    headers: StartCelebrityRecognitionHeaders;
    request: shared.StartCelebrityRecognitionRequest;
}
export declare class StartCelebrityRecognitionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    idempotentParameterMismatchException?: any;
    internalServerError?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    startCelebrityRecognitionResponse?: shared.StartCelebrityRecognitionResponse;
    statusCode: number;
    throttlingException?: any;
    videoTooLargeException?: any;
}
