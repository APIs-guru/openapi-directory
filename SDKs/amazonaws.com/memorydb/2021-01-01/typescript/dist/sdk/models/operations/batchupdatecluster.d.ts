import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum BatchUpdateClusterXAmzTargetEnum {
    AmazonMemoryDbBatchUpdateCluster = "AmazonMemoryDB.BatchUpdateCluster"
}
export declare class BatchUpdateClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchUpdateClusterXAmzTargetEnum;
}
export declare class BatchUpdateClusterRequest extends SpeakeasyBase {
    headers: BatchUpdateClusterHeaders;
    request: shared.BatchUpdateClusterRequest;
}
export declare class BatchUpdateClusterResponse extends SpeakeasyBase {
    batchUpdateClusterResponse?: shared.BatchUpdateClusterResponse;
    contentType: string;
    invalidParameterValueException?: any;
    serviceUpdateNotFoundFault?: any;
    statusCode: number;
}
