import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterTaskFromMaintenanceWindowXAmzTargetEnum {
    AmazonSsmDeregisterTaskFromMaintenanceWindow = "AmazonSSM.DeregisterTaskFromMaintenanceWindow"
}
export declare class DeregisterTaskFromMaintenanceWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterTaskFromMaintenanceWindowXAmzTargetEnum;
}
export declare class DeregisterTaskFromMaintenanceWindowRequest extends SpeakeasyBase {
    headers: DeregisterTaskFromMaintenanceWindowHeaders;
    request: shared.DeregisterTaskFromMaintenanceWindowRequest;
}
export declare class DeregisterTaskFromMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    deregisterTaskFromMaintenanceWindowResult?: shared.DeregisterTaskFromMaintenanceWindowResult;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
}
