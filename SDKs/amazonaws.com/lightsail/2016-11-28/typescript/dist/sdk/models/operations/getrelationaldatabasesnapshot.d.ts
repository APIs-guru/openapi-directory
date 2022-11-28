import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabaseSnapshotXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseSnapshot = "Lightsail_20161128.GetRelationalDatabaseSnapshot"
}
export declare class GetRelationalDatabaseSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseSnapshotXAmzTargetEnum;
}
export declare class GetRelationalDatabaseSnapshotRequest extends SpeakeasyBase {
    headers: GetRelationalDatabaseSnapshotHeaders;
    request: shared.GetRelationalDatabaseSnapshotRequest;
}
export declare class GetRelationalDatabaseSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabaseSnapshotResult?: shared.GetRelationalDatabaseSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
