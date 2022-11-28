import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDiskSnapshotXAmzTargetEnum {
    Lightsail20161128CreateDiskSnapshot = "Lightsail_20161128.CreateDiskSnapshot"
}
export declare class CreateDiskSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDiskSnapshotXAmzTargetEnum;
}
export declare class CreateDiskSnapshotRequest extends SpeakeasyBase {
    headers: CreateDiskSnapshotHeaders;
    request: shared.CreateDiskSnapshotRequest;
}
export declare class CreateDiskSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createDiskSnapshotResult?: shared.CreateDiskSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
