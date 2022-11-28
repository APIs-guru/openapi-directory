import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateMaintenanceWindowTargetXAmzTargetEnum {
    AmazonSsmUpdateMaintenanceWindowTarget = "AmazonSSM.UpdateMaintenanceWindowTarget"
}
export declare class UpdateMaintenanceWindowTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMaintenanceWindowTargetXAmzTargetEnum;
}
export declare class UpdateMaintenanceWindowTargetRequest extends SpeakeasyBase {
    headers: UpdateMaintenanceWindowTargetHeaders;
    request: shared.UpdateMaintenanceWindowTargetRequest;
}
export declare class UpdateMaintenanceWindowTargetResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
    updateMaintenanceWindowTargetResult?: shared.UpdateMaintenanceWindowTargetResult;
}
