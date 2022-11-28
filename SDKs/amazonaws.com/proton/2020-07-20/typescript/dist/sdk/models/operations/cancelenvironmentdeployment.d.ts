import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelEnvironmentDeploymentXAmzTargetEnum {
    AwsProton20200720CancelEnvironmentDeployment = "AwsProton20200720.CancelEnvironmentDeployment"
}
export declare class CancelEnvironmentDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelEnvironmentDeploymentXAmzTargetEnum;
}
export declare class CancelEnvironmentDeploymentRequest extends SpeakeasyBase {
    headers: CancelEnvironmentDeploymentHeaders;
    request: shared.CancelEnvironmentDeploymentInput;
}
export declare class CancelEnvironmentDeploymentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    cancelEnvironmentDeploymentOutput?: shared.CancelEnvironmentDeploymentOutput;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
