import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetExportSnapshotRecordsXAmzTargetEnum {
    Lightsail20161128GetExportSnapshotRecords = "Lightsail_20161128.GetExportSnapshotRecords"
}
export declare class GetExportSnapshotRecordsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetExportSnapshotRecordsXAmzTargetEnum;
}
export declare class GetExportSnapshotRecordsRequest extends SpeakeasyBase {
    headers: GetExportSnapshotRecordsHeaders;
    request: shared.GetExportSnapshotRecordsRequest;
}
export declare class GetExportSnapshotRecordsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getExportSnapshotRecordsResult?: shared.GetExportSnapshotRecordsResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
