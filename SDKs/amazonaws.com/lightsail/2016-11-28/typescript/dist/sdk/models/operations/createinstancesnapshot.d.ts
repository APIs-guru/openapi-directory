import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateInstanceSnapshotXAmzTargetEnum {
    Lightsail20161128CreateInstanceSnapshot = "Lightsail_20161128.CreateInstanceSnapshot"
}
export declare class CreateInstanceSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInstanceSnapshotXAmzTargetEnum;
}
export declare class CreateInstanceSnapshotRequest extends SpeakeasyBase {
    headers: CreateInstanceSnapshotHeaders;
    request: shared.CreateInstanceSnapshotRequest;
}
export declare class CreateInstanceSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createInstanceSnapshotResult?: shared.CreateInstanceSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
