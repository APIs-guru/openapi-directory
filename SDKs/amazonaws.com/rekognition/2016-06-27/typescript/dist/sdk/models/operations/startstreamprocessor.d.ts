import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartStreamProcessorXAmzTargetEnum {
    RekognitionServiceStartStreamProcessor = "RekognitionService.StartStreamProcessor"
}
export declare class StartStreamProcessorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartStreamProcessorXAmzTargetEnum;
}
export declare class StartStreamProcessorRequest extends SpeakeasyBase {
    headers: StartStreamProcessorHeaders;
    request: shared.StartStreamProcessorRequest;
}
export declare class StartStreamProcessorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    startStreamProcessorResponse?: Map<string, any>;
    statusCode: number;
    throttlingException?: any;
}
