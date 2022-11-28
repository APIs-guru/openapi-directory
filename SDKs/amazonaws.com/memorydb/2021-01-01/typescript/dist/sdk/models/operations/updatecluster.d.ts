import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateClusterXAmzTargetEnum {
    AmazonMemoryDbUpdateCluster = "AmazonMemoryDB.UpdateCluster"
}
export declare class UpdateClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateClusterXAmzTargetEnum;
}
export declare class UpdateClusterRequest extends SpeakeasyBase {
    headers: UpdateClusterHeaders;
    request: shared.UpdateClusterRequest;
}
export declare class UpdateClusterResponse extends SpeakeasyBase {
    aclNotFoundFault?: any;
    clusterNotFoundFault?: any;
    clusterQuotaForCustomerExceededFault?: any;
    contentType: string;
    invalidAclStateFault?: any;
    invalidClusterStateFault?: any;
    invalidKmsKeyFault?: any;
    invalidNodeStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    invalidVpcNetworkStateFault?: any;
    noOperationFault?: any;
    nodeQuotaForClusterExceededFault?: any;
    nodeQuotaForCustomerExceededFault?: any;
    parameterGroupNotFoundFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    shardsPerClusterQuotaExceededFault?: any;
    statusCode: number;
    updateClusterResponse?: shared.UpdateClusterResponse;
}
