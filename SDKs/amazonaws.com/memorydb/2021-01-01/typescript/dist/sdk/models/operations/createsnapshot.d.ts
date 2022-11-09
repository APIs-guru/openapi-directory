import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateSnapshotXAmzTargetEnum {
    AmazonMemoryDbCreateSnapshot = "AmazonMemoryDB.CreateSnapshot"
}
export declare class CreateSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSnapshotXAmzTargetEnum;
}
export declare class CreateSnapshotRequest extends SpeakeasyBase {
    headers: CreateSnapshotHeaders;
    request: shared.CreateSnapshotRequest;
}
export declare class CreateSnapshotResponse extends SpeakeasyBase {
    clusterNotFoundFault?: any;
    contentType: string;
    createSnapshotResponse?: shared.CreateSnapshotResponse;
    invalidClusterStateFault?: any;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    serviceLinkedRoleNotFoundFault?: any;
    snapshotAlreadyExistsFault?: any;
    snapshotQuotaExceededFault?: any;
    statusCode: number;
    tagQuotaPerResourceExceeded?: any;
}
