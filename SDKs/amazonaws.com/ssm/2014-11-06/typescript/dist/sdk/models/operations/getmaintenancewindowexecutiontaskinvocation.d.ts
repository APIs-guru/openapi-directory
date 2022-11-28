import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMaintenanceWindowExecutionTaskInvocationXAmzTargetEnum {
    AmazonSsmGetMaintenanceWindowExecutionTaskInvocation = "AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation"
}
export declare class GetMaintenanceWindowExecutionTaskInvocationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMaintenanceWindowExecutionTaskInvocationXAmzTargetEnum;
}
export declare class GetMaintenanceWindowExecutionTaskInvocationRequest extends SpeakeasyBase {
    headers: GetMaintenanceWindowExecutionTaskInvocationHeaders;
    request: shared.GetMaintenanceWindowExecutionTaskInvocationRequest;
}
export declare class GetMaintenanceWindowExecutionTaskInvocationResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    getMaintenanceWindowExecutionTaskInvocationResult?: shared.GetMaintenanceWindowExecutionTaskInvocationResult;
    internalServerError?: any;
    statusCode: number;
}
