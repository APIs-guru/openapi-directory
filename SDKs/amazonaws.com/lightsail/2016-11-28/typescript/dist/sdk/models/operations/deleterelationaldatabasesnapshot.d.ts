import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRelationalDatabaseSnapshotXAmzTargetEnum {
    Lightsail20161128DeleteRelationalDatabaseSnapshot = "Lightsail_20161128.DeleteRelationalDatabaseSnapshot"
}
export declare class DeleteRelationalDatabaseSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRelationalDatabaseSnapshotXAmzTargetEnum;
}
export declare class DeleteRelationalDatabaseSnapshotRequest extends SpeakeasyBase {
    headers: DeleteRelationalDatabaseSnapshotHeaders;
    request: shared.DeleteRelationalDatabaseSnapshotRequest;
}
export declare class DeleteRelationalDatabaseSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteRelationalDatabaseSnapshotResult?: shared.DeleteRelationalDatabaseSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
