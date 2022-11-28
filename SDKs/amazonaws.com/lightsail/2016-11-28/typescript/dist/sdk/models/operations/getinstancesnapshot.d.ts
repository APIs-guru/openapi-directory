import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInstanceSnapshotXAmzTargetEnum {
    Lightsail20161128GetInstanceSnapshot = "Lightsail_20161128.GetInstanceSnapshot"
}
export declare class GetInstanceSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceSnapshotXAmzTargetEnum;
}
export declare class GetInstanceSnapshotRequest extends SpeakeasyBase {
    headers: GetInstanceSnapshotHeaders;
    request: shared.GetInstanceSnapshotRequest;
}
export declare class GetInstanceSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getInstanceSnapshotResult?: shared.GetInstanceSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
