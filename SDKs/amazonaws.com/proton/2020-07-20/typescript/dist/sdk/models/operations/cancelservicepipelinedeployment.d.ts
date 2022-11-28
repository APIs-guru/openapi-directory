import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelServicePipelineDeploymentXAmzTargetEnum {
    AwsProton20200720CancelServicePipelineDeployment = "AwsProton20200720.CancelServicePipelineDeployment"
}
export declare class CancelServicePipelineDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelServicePipelineDeploymentXAmzTargetEnum;
}
export declare class CancelServicePipelineDeploymentRequest extends SpeakeasyBase {
    headers: CancelServicePipelineDeploymentHeaders;
    request: shared.CancelServicePipelineDeploymentInput;
}
export declare class CancelServicePipelineDeploymentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    cancelServicePipelineDeploymentOutput?: shared.CancelServicePipelineDeploymentOutput;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
