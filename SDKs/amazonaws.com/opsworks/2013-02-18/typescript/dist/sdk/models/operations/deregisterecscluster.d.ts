import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterEcsClusterXAmzTargetEnum {
    OpsWorks20130218DeregisterEcsCluster = "OpsWorks_20130218.DeregisterEcsCluster"
}
export declare class DeregisterEcsClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterEcsClusterXAmzTargetEnum;
}
export declare class DeregisterEcsClusterRequest extends SpeakeasyBase {
    headers: DeregisterEcsClusterHeaders;
    request: shared.DeregisterEcsClusterRequest;
}
export declare class DeregisterEcsClusterResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
