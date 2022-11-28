import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateContainerServiceDeploymentXAmzTargetEnum {
    Lightsail20161128CreateContainerServiceDeployment = "Lightsail_20161128.CreateContainerServiceDeployment"
}
export declare class CreateContainerServiceDeploymentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateContainerServiceDeploymentXAmzTargetEnum;
}
export declare class CreateContainerServiceDeploymentRequest extends SpeakeasyBase {
    headers: CreateContainerServiceDeploymentHeaders;
    request: shared.CreateContainerServiceDeploymentRequest;
}
export declare class CreateContainerServiceDeploymentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createContainerServiceDeploymentResult?: shared.CreateContainerServiceDeploymentResult;
    invalidInputException?: any;
    notFoundException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
