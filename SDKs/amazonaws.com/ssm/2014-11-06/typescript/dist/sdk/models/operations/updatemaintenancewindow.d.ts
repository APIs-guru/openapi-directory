import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateMaintenanceWindowXAmzTargetEnum {
    AmazonSsmUpdateMaintenanceWindow = "AmazonSSM.UpdateMaintenanceWindow"
}
export declare class UpdateMaintenanceWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMaintenanceWindowXAmzTargetEnum;
}
export declare class UpdateMaintenanceWindowRequest extends SpeakeasyBase {
    headers: UpdateMaintenanceWindowHeaders;
    request: shared.UpdateMaintenanceWindowRequest;
}
export declare class UpdateMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
    updateMaintenanceWindowResult?: shared.UpdateMaintenanceWindowResult;
}
