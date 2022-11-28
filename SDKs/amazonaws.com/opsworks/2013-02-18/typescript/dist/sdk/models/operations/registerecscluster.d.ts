import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterEcsClusterXAmzTargetEnum {
    OpsWorks20130218RegisterEcsCluster = "OpsWorks_20130218.RegisterEcsCluster"
}
export declare class RegisterEcsClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterEcsClusterXAmzTargetEnum;
}
export declare class RegisterEcsClusterRequest extends SpeakeasyBase {
    headers: RegisterEcsClusterHeaders;
    request: shared.RegisterEcsClusterRequest;
}
export declare class RegisterEcsClusterResponse extends SpeakeasyBase {
    contentType: string;
    registerEcsClusterResult?: shared.RegisterEcsClusterResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
