import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RecognizeCelebritiesXAmzTargetEnum {
    RekognitionServiceRecognizeCelebrities = "RekognitionService.RecognizeCelebrities"
}
export declare class RecognizeCelebritiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RecognizeCelebritiesXAmzTargetEnum;
}
export declare class RecognizeCelebritiesRequest extends SpeakeasyBase {
    headers: RecognizeCelebritiesHeaders;
    request: shared.RecognizeCelebritiesRequest;
}
export declare class RecognizeCelebritiesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    imageTooLargeException?: any;
    internalServerError?: any;
    invalidImageFormatException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    recognizeCelebritiesResponse?: shared.RecognizeCelebritiesResponse;
    statusCode: number;
    throttlingException?: any;
}
