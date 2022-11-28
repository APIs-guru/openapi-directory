import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMaintenanceWindowTaskXAmzTargetEnum {
    AmazonSsmGetMaintenanceWindowTask = "AmazonSSM.GetMaintenanceWindowTask"
}
export declare class GetMaintenanceWindowTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMaintenanceWindowTaskXAmzTargetEnum;
}
export declare class GetMaintenanceWindowTaskRequest extends SpeakeasyBase {
    headers: GetMaintenanceWindowTaskHeaders;
    request: shared.GetMaintenanceWindowTaskRequest;
}
export declare class GetMaintenanceWindowTaskResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    getMaintenanceWindowTaskResult?: shared.GetMaintenanceWindowTaskResult;
    internalServerError?: any;
    statusCode: number;
}
