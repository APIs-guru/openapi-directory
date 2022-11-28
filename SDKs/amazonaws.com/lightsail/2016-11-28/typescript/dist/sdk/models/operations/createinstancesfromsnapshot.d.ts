import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateInstancesFromSnapshotXAmzTargetEnum {
    Lightsail20161128CreateInstancesFromSnapshot = "Lightsail_20161128.CreateInstancesFromSnapshot"
}
export declare class CreateInstancesFromSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInstancesFromSnapshotXAmzTargetEnum;
}
export declare class CreateInstancesFromSnapshotRequest extends SpeakeasyBase {
    headers: CreateInstancesFromSnapshotHeaders;
    request: shared.CreateInstancesFromSnapshotRequest;
}
export declare class CreateInstancesFromSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createInstancesFromSnapshotResult?: shared.CreateInstancesFromSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
