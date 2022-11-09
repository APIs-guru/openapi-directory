import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateServicePipelineXAmzTargetEnum {
    AwsProton20200720UpdateServicePipeline = "AwsProton20200720.UpdateServicePipeline"
}
export declare class UpdateServicePipelineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServicePipelineXAmzTargetEnum;
}
export declare class UpdateServicePipelineRequest extends SpeakeasyBase {
    headers: UpdateServicePipelineHeaders;
    request: shared.UpdateServicePipelineInput;
}
export declare class UpdateServicePipelineResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateServicePipelineOutput?: shared.UpdateServicePipelineOutput;
    validationException?: any;
}
