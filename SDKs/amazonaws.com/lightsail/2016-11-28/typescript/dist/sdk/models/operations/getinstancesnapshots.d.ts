import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetInstanceSnapshotsXAmzTargetEnum {
    Lightsail20161128GetInstanceSnapshots = "Lightsail_20161128.GetInstanceSnapshots"
}
export declare class GetInstanceSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstanceSnapshotsXAmzTargetEnum;
}
export declare class GetInstanceSnapshotsRequest extends SpeakeasyBase {
    headers: GetInstanceSnapshotsHeaders;
    request: shared.GetInstanceSnapshotsRequest;
}
export declare class GetInstanceSnapshotsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getInstanceSnapshotsResult?: shared.GetInstanceSnapshotsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
