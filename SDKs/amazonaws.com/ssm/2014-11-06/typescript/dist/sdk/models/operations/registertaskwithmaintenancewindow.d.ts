import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterTaskWithMaintenanceWindowXAmzTargetEnum {
    AmazonSsmRegisterTaskWithMaintenanceWindow = "AmazonSSM.RegisterTaskWithMaintenanceWindow"
}
export declare class RegisterTaskWithMaintenanceWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterTaskWithMaintenanceWindowXAmzTargetEnum;
}
export declare class RegisterTaskWithMaintenanceWindowRequest extends SpeakeasyBase {
    headers: RegisterTaskWithMaintenanceWindowHeaders;
    request: shared.RegisterTaskWithMaintenanceWindowRequest;
}
export declare class RegisterTaskWithMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    featureNotAvailableException?: any;
    idempotentParameterMismatch?: any;
    internalServerError?: any;
    registerTaskWithMaintenanceWindowResult?: shared.RegisterTaskWithMaintenanceWindowResult;
    resourceLimitExceededException?: any;
    statusCode: number;
}
