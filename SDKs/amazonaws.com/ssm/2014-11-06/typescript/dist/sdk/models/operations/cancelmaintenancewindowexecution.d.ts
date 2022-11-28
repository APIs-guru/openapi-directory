import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelMaintenanceWindowExecutionXAmzTargetEnum {
    AmazonSsmCancelMaintenanceWindowExecution = "AmazonSSM.CancelMaintenanceWindowExecution"
}
export declare class CancelMaintenanceWindowExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelMaintenanceWindowExecutionXAmzTargetEnum;
}
export declare class CancelMaintenanceWindowExecutionRequest extends SpeakeasyBase {
    headers: CancelMaintenanceWindowExecutionHeaders;
    request: shared.CancelMaintenanceWindowExecutionRequest;
}
export declare class CancelMaintenanceWindowExecutionResponse extends SpeakeasyBase {
    cancelMaintenanceWindowExecutionResult?: shared.CancelMaintenanceWindowExecutionResult;
    contentType: string;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
}
