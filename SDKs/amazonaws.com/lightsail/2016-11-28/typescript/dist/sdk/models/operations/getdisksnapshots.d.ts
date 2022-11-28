import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDiskSnapshotsXAmzTargetEnum {
    Lightsail20161128GetDiskSnapshots = "Lightsail_20161128.GetDiskSnapshots"
}
export declare class GetDiskSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDiskSnapshotsXAmzTargetEnum;
}
export declare class GetDiskSnapshotsRequest extends SpeakeasyBase {
    headers: GetDiskSnapshotsHeaders;
    request: shared.GetDiskSnapshotsRequest;
}
export declare class GetDiskSnapshotsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getDiskSnapshotsResult?: shared.GetDiskSnapshotsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
