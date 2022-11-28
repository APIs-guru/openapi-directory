import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectModerationLabelsXAmzTargetEnum {
    RekognitionServiceDetectModerationLabels = "RekognitionService.DetectModerationLabels"
}
export declare class DetectModerationLabelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectModerationLabelsXAmzTargetEnum;
}
export declare class DetectModerationLabelsRequest extends SpeakeasyBase {
    headers: DetectModerationLabelsHeaders;
    request: shared.DetectModerationLabelsRequest;
}
export declare class DetectModerationLabelsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    detectModerationLabelsResponse?: shared.DetectModerationLabelsResponse;
    humanLoopQuotaExceededException?: any;
    imageTooLargeException?: any;
    internalServerError?: any;
    invalidImageFormatException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
