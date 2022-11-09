import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CancelExportTaskXAmzTargetEnum {
    Logs20140328CancelExportTask = "Logs_20140328.CancelExportTask"
}
export declare class CancelExportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelExportTaskXAmzTargetEnum;
}
export declare class CancelExportTaskRequest extends SpeakeasyBase {
    headers: CancelExportTaskHeaders;
    request: shared.CancelExportTaskRequest;
}
export declare class CancelExportTaskResponse extends SpeakeasyBase {
    contentType: string;
    invalidOperationException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
