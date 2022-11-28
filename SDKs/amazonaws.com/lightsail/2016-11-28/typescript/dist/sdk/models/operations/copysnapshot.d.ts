import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CopySnapshotXAmzTargetEnum {
    Lightsail20161128CopySnapshot = "Lightsail_20161128.CopySnapshot"
}
export declare class CopySnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopySnapshotXAmzTargetEnum;
}
export declare class CopySnapshotRequest extends SpeakeasyBase {
    headers: CopySnapshotHeaders;
    request: shared.CopySnapshotRequest;
}
export declare class CopySnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    copySnapshotResult?: shared.CopySnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
