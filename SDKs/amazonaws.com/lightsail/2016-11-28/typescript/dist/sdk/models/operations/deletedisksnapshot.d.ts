import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDiskSnapshotXAmzTargetEnum {
    Lightsail20161128DeleteDiskSnapshot = "Lightsail_20161128.DeleteDiskSnapshot"
}
export declare class DeleteDiskSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDiskSnapshotXAmzTargetEnum;
}
export declare class DeleteDiskSnapshotRequest extends SpeakeasyBase {
    headers: DeleteDiskSnapshotHeaders;
    request: shared.DeleteDiskSnapshotRequest;
}
export declare class DeleteDiskSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteDiskSnapshotResult?: shared.DeleteDiskSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
