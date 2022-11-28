import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAutoSnapshotsXAmzTargetEnum {
    Lightsail20161128GetAutoSnapshots = "Lightsail_20161128.GetAutoSnapshots"
}
export declare class GetAutoSnapshotsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAutoSnapshotsXAmzTargetEnum;
}
export declare class GetAutoSnapshotsRequest extends SpeakeasyBase {
    headers: GetAutoSnapshotsHeaders;
    request: shared.GetAutoSnapshotsRequest;
}
export declare class GetAutoSnapshotsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAutoSnapshotsResult?: shared.GetAutoSnapshotsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
