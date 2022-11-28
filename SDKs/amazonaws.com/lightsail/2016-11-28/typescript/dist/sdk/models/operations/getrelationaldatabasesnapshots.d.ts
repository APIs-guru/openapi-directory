import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetRelationalDatabaseSnapshotsXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseSnapshots = "Lightsail_20161128.GetRelationalDatabaseSnapshots"
}
export declare class GetRelationalDatabaseSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRelationalDatabaseSnapshotsXAmzTargetEnum;
}
export declare class GetRelationalDatabaseSnapshotsRequest extends SpeakeasyBase {
    headers: GetRelationalDatabaseSnapshotsHeaders;
    request: shared.GetRelationalDatabaseSnapshotsRequest;
}
export declare class GetRelationalDatabaseSnapshotsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getRelationalDatabaseSnapshotsResult?: shared.GetRelationalDatabaseSnapshotsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
