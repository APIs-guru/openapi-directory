import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CopySnapshotXAmzTargetEnum {
    AmazonMemoryDbCopySnapshot = "AmazonMemoryDB.CopySnapshot"
}
export declare class CopySnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopySnapshotXAmzTargetEnum;
}
export declare class CopySnapshotRequest extends SpeakeasyBase {
    headers: CopySnapshotHeaders;
    request: shared.CopySnapshotRequest;
}
export declare class CopySnapshotResponse extends SpeakeasyBase {
    contentType: string;
    copySnapshotResponse?: shared.CopySnapshotResponse;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    invalidSnapshotStateFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    snapshotAlreadyExistsFault?: any;
    snapshotNotFoundFault?: any;
    snapshotQuotaExceededFault?: any;
    statusCode: number;
    tagQuotaPerResourceExceeded?: any;
}
