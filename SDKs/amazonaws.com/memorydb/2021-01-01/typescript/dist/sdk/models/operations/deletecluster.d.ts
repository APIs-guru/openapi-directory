import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteClusterXAmzTargetEnum {
    AmazonMemoryDbDeleteCluster = "AmazonMemoryDB.DeleteCluster"
}
export declare class DeleteClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteClusterXAmzTargetEnum;
}
export declare class DeleteClusterRequest extends SpeakeasyBase {
    headers: DeleteClusterHeaders;
    request: shared.DeleteClusterRequest;
}
export declare class DeleteClusterResponse extends SpeakeasyBase {
    clusterNotFoundFault?: any;
    contentType: string;
    deleteClusterResponse?: shared.DeleteClusterResponse;
    invalidClusterStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    serviceLinkedRoleNotFoundFault?: any;
    snapshotAlreadyExistsFault?: any;
    statusCode: number;
}
