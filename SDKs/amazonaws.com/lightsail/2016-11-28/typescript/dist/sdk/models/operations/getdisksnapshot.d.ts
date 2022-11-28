import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDiskSnapshotXAmzTargetEnum {
    Lightsail20161128GetDiskSnapshot = "Lightsail_20161128.GetDiskSnapshot"
}
export declare class GetDiskSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDiskSnapshotXAmzTargetEnum;
}
export declare class GetDiskSnapshotRequest extends SpeakeasyBase {
    headers: GetDiskSnapshotHeaders;
    request: shared.GetDiskSnapshotRequest;
}
export declare class GetDiskSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getDiskSnapshotResult?: shared.GetDiskSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
