import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMaintenanceWindowExecutionTaskXAmzTargetEnum {
    AmazonSsmGetMaintenanceWindowExecutionTask = "AmazonSSM.GetMaintenanceWindowExecutionTask"
}
export declare class GetMaintenanceWindowExecutionTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMaintenanceWindowExecutionTaskXAmzTargetEnum;
}
export declare class GetMaintenanceWindowExecutionTaskRequest extends SpeakeasyBase {
    headers: GetMaintenanceWindowExecutionTaskHeaders;
    request: shared.GetMaintenanceWindowExecutionTaskRequest;
}
export declare class GetMaintenanceWindowExecutionTaskResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    getMaintenanceWindowExecutionTaskResult?: shared.GetMaintenanceWindowExecutionTaskResult;
    internalServerError?: any;
    statusCode: number;
}
