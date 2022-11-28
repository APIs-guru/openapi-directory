import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterTargetFromMaintenanceWindowXAmzTargetEnum {
    AmazonSsmDeregisterTargetFromMaintenanceWindow = "AmazonSSM.DeregisterTargetFromMaintenanceWindow"
}
export declare class DeregisterTargetFromMaintenanceWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterTargetFromMaintenanceWindowXAmzTargetEnum;
}
export declare class DeregisterTargetFromMaintenanceWindowRequest extends SpeakeasyBase {
    headers: DeregisterTargetFromMaintenanceWindowHeaders;
    request: shared.DeregisterTargetFromMaintenanceWindowRequest;
}
export declare class DeregisterTargetFromMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    deregisterTargetFromMaintenanceWindowResult?: shared.DeregisterTargetFromMaintenanceWindowResult;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
    targetInUseException?: any;
}
