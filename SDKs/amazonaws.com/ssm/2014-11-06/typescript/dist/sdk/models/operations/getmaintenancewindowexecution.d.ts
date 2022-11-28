import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMaintenanceWindowExecutionXAmzTargetEnum {
    AmazonSsmGetMaintenanceWindowExecution = "AmazonSSM.GetMaintenanceWindowExecution"
}
export declare class GetMaintenanceWindowExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMaintenanceWindowExecutionXAmzTargetEnum;
}
export declare class GetMaintenanceWindowExecutionRequest extends SpeakeasyBase {
    headers: GetMaintenanceWindowExecutionHeaders;
    request: shared.GetMaintenanceWindowExecutionRequest;
}
export declare class GetMaintenanceWindowExecutionResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    getMaintenanceWindowExecutionResult?: shared.GetMaintenanceWindowExecutionResult;
    internalServerError?: any;
    statusCode: number;
}
