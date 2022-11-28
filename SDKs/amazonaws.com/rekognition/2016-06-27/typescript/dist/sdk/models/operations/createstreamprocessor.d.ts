import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateStreamProcessorXAmzTargetEnum {
    RekognitionServiceCreateStreamProcessor = "RekognitionService.CreateStreamProcessor"
}
export declare class CreateStreamProcessorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStreamProcessorXAmzTargetEnum;
}
export declare class CreateStreamProcessorRequest extends SpeakeasyBase {
    headers: CreateStreamProcessorHeaders;
    request: shared.CreateStreamProcessorRequest;
}
export declare class CreateStreamProcessorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createStreamProcessorResponse?: shared.CreateStreamProcessorResponse;
    internalServerError?: any;
    invalidParameterException?: any;
    limitExceededException?: any;
    provisionedThroughputExceededException?: any;
    resourceInUseException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
