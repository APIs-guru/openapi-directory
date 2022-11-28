import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateMaintenanceWindowXAmzTargetEnum {
    AmazonSsmCreateMaintenanceWindow = "AmazonSSM.CreateMaintenanceWindow"
}
export declare class CreateMaintenanceWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMaintenanceWindowXAmzTargetEnum;
}
export declare class CreateMaintenanceWindowRequest extends SpeakeasyBase {
    headers: CreateMaintenanceWindowHeaders;
    request: shared.CreateMaintenanceWindowRequest;
}
export declare class CreateMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    createMaintenanceWindowResult?: shared.CreateMaintenanceWindowResult;
    idempotentParameterMismatch?: any;
    internalServerError?: any;
    resourceLimitExceededException?: any;
    statusCode: number;
}
