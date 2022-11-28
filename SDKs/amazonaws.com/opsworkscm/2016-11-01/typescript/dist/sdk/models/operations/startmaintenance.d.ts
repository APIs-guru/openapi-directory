import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartMaintenanceXAmzTargetEnum {
    OpsWorksCmV20161101StartMaintenance = "OpsWorksCM_V2016_11_01.StartMaintenance"
}
export declare class StartMaintenanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMaintenanceXAmzTargetEnum;
}
export declare class StartMaintenanceRequest extends SpeakeasyBase {
    headers: StartMaintenanceHeaders;
    request: shared.StartMaintenanceRequest;
}
export declare class StartMaintenanceResponse extends SpeakeasyBase {
    contentType: string;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    startMaintenanceResponse?: shared.StartMaintenanceResponse;
    statusCode: number;
    validationException?: any;
}
