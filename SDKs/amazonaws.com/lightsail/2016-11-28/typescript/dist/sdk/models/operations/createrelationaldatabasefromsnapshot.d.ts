import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateRelationalDatabaseFromSnapshotXAmzTargetEnum {
    Lightsail20161128CreateRelationalDatabaseFromSnapshot = "Lightsail_20161128.CreateRelationalDatabaseFromSnapshot"
}
export declare class CreateRelationalDatabaseFromSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRelationalDatabaseFromSnapshotXAmzTargetEnum;
}
export declare class CreateRelationalDatabaseFromSnapshotRequest extends SpeakeasyBase {
    headers: CreateRelationalDatabaseFromSnapshotHeaders;
    request: shared.CreateRelationalDatabaseFromSnapshotRequest;
}
export declare class CreateRelationalDatabaseFromSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createRelationalDatabaseFromSnapshotResult?: shared.CreateRelationalDatabaseFromSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
