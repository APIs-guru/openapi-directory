import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateRelationalDatabaseSnapshotXAmzTargetEnum {
    Lightsail20161128CreateRelationalDatabaseSnapshot = "Lightsail_20161128.CreateRelationalDatabaseSnapshot"
}
export declare class CreateRelationalDatabaseSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRelationalDatabaseSnapshotXAmzTargetEnum;
}
export declare class CreateRelationalDatabaseSnapshotRequest extends SpeakeasyBase {
    headers: CreateRelationalDatabaseSnapshotHeaders;
    request: shared.CreateRelationalDatabaseSnapshotRequest;
}
export declare class CreateRelationalDatabaseSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createRelationalDatabaseSnapshotResult?: shared.CreateRelationalDatabaseSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
