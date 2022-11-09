import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateExportTaskXAmzTargetEnum {
    Logs20140328CreateExportTask = "Logs_20140328.CreateExportTask"
}
export declare class CreateExportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateExportTaskXAmzTargetEnum;
}
export declare class CreateExportTaskRequest extends SpeakeasyBase {
    headers: CreateExportTaskHeaders;
    request: shared.CreateExportTaskRequest;
}
export declare class CreateExportTaskResponse extends SpeakeasyBase {
    contentType: string;
    createExportTaskResponse?: shared.CreateExportTaskResponse;
    invalidParameterException?: any;
    limitExceededException?: any;
    operationAbortedException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
