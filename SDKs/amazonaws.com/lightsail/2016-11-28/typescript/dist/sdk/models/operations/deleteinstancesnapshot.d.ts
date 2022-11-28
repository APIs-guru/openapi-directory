import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteInstanceSnapshotXAmzTargetEnum {
    Lightsail20161128DeleteInstanceSnapshot = "Lightsail_20161128.DeleteInstanceSnapshot"
}
export declare class DeleteInstanceSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInstanceSnapshotXAmzTargetEnum;
}
export declare class DeleteInstanceSnapshotRequest extends SpeakeasyBase {
    headers: DeleteInstanceSnapshotHeaders;
    request: shared.DeleteInstanceSnapshotRequest;
}
export declare class DeleteInstanceSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteInstanceSnapshotResult?: shared.DeleteInstanceSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
