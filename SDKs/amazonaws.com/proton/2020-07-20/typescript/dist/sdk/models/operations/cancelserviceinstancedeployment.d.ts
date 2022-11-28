import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelServiceInstanceDeploymentXAmzTargetEnum {
    AwsProton20200720CancelServiceInstanceDeployment = "AwsProton20200720.CancelServiceInstanceDeployment"
}
export declare class CancelServiceInstanceDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelServiceInstanceDeploymentXAmzTargetEnum;
}
export declare class CancelServiceInstanceDeploymentRequest extends SpeakeasyBase {
    headers: CancelServiceInstanceDeploymentHeaders;
    request: shared.CancelServiceInstanceDeploymentInput;
}
export declare class CancelServiceInstanceDeploymentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    cancelServiceInstanceDeploymentOutput?: shared.CancelServiceInstanceDeploymentOutput;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
