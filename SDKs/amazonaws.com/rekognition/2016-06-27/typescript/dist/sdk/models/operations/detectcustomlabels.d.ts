import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectCustomLabelsXAmzTargetEnum {
    RekognitionServiceDetectCustomLabels = "RekognitionService.DetectCustomLabels"
}
export declare class DetectCustomLabelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectCustomLabelsXAmzTargetEnum;
}
export declare class DetectCustomLabelsRequest extends SpeakeasyBase {
    headers: DetectCustomLabelsHeaders;
    request: shared.DetectCustomLabelsRequest;
}
export declare class DetectCustomLabelsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    detectCustomLabelsResponse?: shared.DetectCustomLabelsResponse;
    imageTooLargeException?: any;
    internalServerError?: any;
    invalidImageFormatException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    resourceNotFoundException?: any;
    resourceNotReadyException?: any;
    statusCode: number;
    throttlingException?: any;
}
