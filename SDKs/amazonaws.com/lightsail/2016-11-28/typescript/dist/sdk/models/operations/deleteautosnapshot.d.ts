import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAutoSnapshotXAmzTargetEnum {
    Lightsail20161128DeleteAutoSnapshot = "Lightsail_20161128.DeleteAutoSnapshot"
}
export declare class DeleteAutoSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAutoSnapshotXAmzTargetEnum;
}
export declare class DeleteAutoSnapshotRequest extends SpeakeasyBase {
    headers: DeleteAutoSnapshotHeaders;
    request: shared.DeleteAutoSnapshotRequest;
}
export declare class DeleteAutoSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteAutoSnapshotResult?: shared.DeleteAutoSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
