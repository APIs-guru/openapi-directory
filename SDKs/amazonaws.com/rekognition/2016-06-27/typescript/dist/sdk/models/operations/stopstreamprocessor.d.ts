import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopStreamProcessorXAmzTargetEnum {
    RekognitionServiceStopStreamProcessor = "RekognitionService.StopStreamProcessor"
}
export declare class StopStreamProcessorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopStreamProcessorXAmzTargetEnum;
}
export declare class StopStreamProcessorRequest extends SpeakeasyBase {
    headers: StopStreamProcessorHeaders;
    request: shared.StopStreamProcessorRequest;
}
export declare class StopStreamProcessorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    stopStreamProcessorResponse?: Map<string, any>;
    throttlingException?: any;
}
