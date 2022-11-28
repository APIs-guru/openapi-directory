import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDiskFromSnapshotXAmzTargetEnum {
    Lightsail20161128CreateDiskFromSnapshot = "Lightsail_20161128.CreateDiskFromSnapshot"
}
export declare class CreateDiskFromSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDiskFromSnapshotXAmzTargetEnum;
}
export declare class CreateDiskFromSnapshotRequest extends SpeakeasyBase {
    headers: CreateDiskFromSnapshotHeaders;
    request: shared.CreateDiskFromSnapshotRequest;
}
export declare class CreateDiskFromSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createDiskFromSnapshotResult?: shared.CreateDiskFromSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
