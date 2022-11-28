import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteMaintenanceWindowXAmzTargetEnum {
    AmazonSsmDeleteMaintenanceWindow = "AmazonSSM.DeleteMaintenanceWindow"
}
export declare class DeleteMaintenanceWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMaintenanceWindowXAmzTargetEnum;
}
export declare class DeleteMaintenanceWindowRequest extends SpeakeasyBase {
    headers: DeleteMaintenanceWindowHeaders;
    request: shared.DeleteMaintenanceWindowRequest;
}
export declare class DeleteMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    deleteMaintenanceWindowResult?: shared.DeleteMaintenanceWindowResult;
    internalServerError?: any;
    statusCode: number;
}
