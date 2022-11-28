import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSnapshotXAmzTargetEnum {
    AmazonMemoryDbDeleteSnapshot = "AmazonMemoryDB.DeleteSnapshot"
}
export declare class DeleteSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSnapshotXAmzTargetEnum;
}
export declare class DeleteSnapshotRequest extends SpeakeasyBase {
    headers: DeleteSnapshotHeaders;
    request: shared.DeleteSnapshotRequest;
}
export declare class DeleteSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    deleteSnapshotResponse?: shared.DeleteSnapshotResponse;
    invalidParameterCombinationException?: any;
    invalidParameterValueException?: any;
    invalidSnapshotStateFault?: any;
    serviceLinkedRoleNotFoundFault?: any;
    snapshotNotFoundFault?: any;
    statusCode: number;
}
