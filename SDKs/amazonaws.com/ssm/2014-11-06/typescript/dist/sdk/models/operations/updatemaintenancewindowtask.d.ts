import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateMaintenanceWindowTaskXAmzTargetEnum {
    AmazonSsmUpdateMaintenanceWindowTask = "AmazonSSM.UpdateMaintenanceWindowTask"
}
export declare class UpdateMaintenanceWindowTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMaintenanceWindowTaskXAmzTargetEnum;
}
export declare class UpdateMaintenanceWindowTaskRequest extends SpeakeasyBase {
    headers: UpdateMaintenanceWindowTaskHeaders;
    request: shared.UpdateMaintenanceWindowTaskRequest;
}
export declare class UpdateMaintenanceWindowTaskResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
    updateMaintenanceWindowTaskResult?: shared.UpdateMaintenanceWindowTaskResult;
}
