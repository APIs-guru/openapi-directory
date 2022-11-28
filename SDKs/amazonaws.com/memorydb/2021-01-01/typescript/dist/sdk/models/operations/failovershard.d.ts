import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum FailoverShardXAmzTargetEnum {
    AmazonMemoryDbFailoverShard = "AmazonMemoryDB.FailoverShard"
}
export declare class FailoverShardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: FailoverShardXAmzTargetEnum;
}
export declare class FailoverShardRequest extends SpeakeasyBase {
    headers: FailoverShardHeaders;
    request: shared.FailoverShardRequest;
}
export declare class FailoverShardResponse extends SpeakeasyBase {
    apiCallRateForCustomerExceededFault?: any;
    clusterNotFoundFault?: any;
    contentType: string;
    failoverShardResponse?: shared.FailoverShardResponse;
    invalidClusterStateFault?: any;
    invalidKmsKeyFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    shardNotFoundFault?: any;
    statusCode: number;
    testFailoverNotAvailableFault?: any;
}
