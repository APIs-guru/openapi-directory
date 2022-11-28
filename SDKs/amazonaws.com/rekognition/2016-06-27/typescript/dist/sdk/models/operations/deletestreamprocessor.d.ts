import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteStreamProcessorXAmzTargetEnum {
    RekognitionServiceDeleteStreamProcessor = "RekognitionService.DeleteStreamProcessor"
}
export declare class DeleteStreamProcessorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStreamProcessorXAmzTargetEnum;
}
export declare class DeleteStreamProcessorRequest extends SpeakeasyBase {
    headers: DeleteStreamProcessorHeaders;
    request: shared.DeleteStreamProcessorRequest;
}
export declare class DeleteStreamProcessorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteStreamProcessorResponse?: Map<string, any>;
    internalServerError?: any;
    invalidParameterException?: any;
    provisionedThroughputExceededException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
