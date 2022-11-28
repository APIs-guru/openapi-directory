import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectLabelsXAmzTargetEnum {
    RekognitionServiceDetectLabels = "RekognitionService.DetectLabels"
}
export declare class DetectLabelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectLabelsXAmzTargetEnum;
}
export declare class DetectLabelsRequest extends SpeakeasyBase {
    headers: DetectLabelsHeaders;
    request: shared.DetectLabelsRequest;
}
export declare class DetectLabelsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    detectLabelsResponse?: shared.DetectLabelsResponse;
    imageTooLargeException?: any;
    internalServerError?: any;
    invalidImageFormatException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
