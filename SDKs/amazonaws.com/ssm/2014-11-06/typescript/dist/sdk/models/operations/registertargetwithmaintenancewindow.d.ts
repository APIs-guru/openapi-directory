import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterTargetWithMaintenanceWindowXAmzTargetEnum {
    AmazonSsmRegisterTargetWithMaintenanceWindow = "AmazonSSM.RegisterTargetWithMaintenanceWindow"
}
export declare class RegisterTargetWithMaintenanceWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterTargetWithMaintenanceWindowXAmzTargetEnum;
}
export declare class RegisterTargetWithMaintenanceWindowRequest extends SpeakeasyBase {
    headers: RegisterTargetWithMaintenanceWindowHeaders;
    request: shared.RegisterTargetWithMaintenanceWindowRequest;
}
export declare class RegisterTargetWithMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    idempotentParameterMismatch?: any;
    internalServerError?: any;
    registerTargetWithMaintenanceWindowResult?: shared.RegisterTargetWithMaintenanceWindowResult;
    resourceLimitExceededException?: any;
    statusCode: number;
}
