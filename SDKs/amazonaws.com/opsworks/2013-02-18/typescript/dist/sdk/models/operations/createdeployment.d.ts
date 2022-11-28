import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDeploymentXAmzTargetEnum {
    OpsWorks20130218CreateDeployment = "OpsWorks_20130218.CreateDeployment"
}
export declare class CreateDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeploymentXAmzTargetEnum;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    headers: CreateDeploymentHeaders;
    request: shared.CreateDeploymentRequest;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    createDeploymentResult?: shared.CreateDeploymentResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
