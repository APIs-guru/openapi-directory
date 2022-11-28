import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExportSnapshotXAmzTargetEnum {
    Lightsail20161128ExportSnapshot = "Lightsail_20161128.ExportSnapshot"
}
export declare class ExportSnapshotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportSnapshotXAmzTargetEnum;
}
export declare class ExportSnapshotRequest extends SpeakeasyBase {
    headers: ExportSnapshotHeaders;
    request: shared.ExportSnapshotRequest;
}
export declare class ExportSnapshotResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    exportSnapshotResult?: shared.ExportSnapshotResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
