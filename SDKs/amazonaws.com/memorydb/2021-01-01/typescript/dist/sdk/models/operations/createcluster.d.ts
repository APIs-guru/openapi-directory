import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateClusterXAmzTargetEnum {
    AmazonMemoryDbCreateCluster = "AmazonMemoryDB.CreateCluster"
}
export declare class CreateClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateClusterXAmzTargetEnum;
}
export declare class CreateClusterRequest extends SpeakeasyBase {
    headers: CreateClusterHeaders;
    request: shared.CreateClusterRequest;
}
export declare class CreateClusterResponse extends SpeakeasyBase {
    aclNotFoundFault?: any;
    clusterAlreadyExistsFault?: any;
    clusterQuotaForCustomerExceededFault?: any;
    contentType: string;
    createClusterResponse?: shared.CreateClusterResponse;
    insufficientClusterCapacityFault?: any;
    invalidAclStateFault?: any;
    invalidCredentialsException?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    invalidVpcNetworkStateFault?: any;
    nodeQuotaForClusterExceededFault?: any;
    nodeQuotaForCustomerExceededFault?: any;
    parameterGroupNotFoundFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    shardsPerClusterQuotaExceededFault?: any;
    statusCode: number;
    subnetGroupNotFoundFault?: any;
    tagQuotaPerResourceExceeded?: any;
}
