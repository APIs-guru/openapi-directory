import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectTextXAmzTargetEnum {
    RekognitionServiceDetectText = "RekognitionService.DetectText"
}
export declare class DetectTextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectTextXAmzTargetEnum;
}
export declare class DetectTextRequest extends SpeakeasyBase {
    headers: DetectTextHeaders;
    request: shared.DetectTextRequest;
}
export declare class DetectTextResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    detectTextResponse?: shared.DetectTextResponse;
    imageTooLargeException?: any;
    internalServerError?: any;
    invalidImageFormatException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
