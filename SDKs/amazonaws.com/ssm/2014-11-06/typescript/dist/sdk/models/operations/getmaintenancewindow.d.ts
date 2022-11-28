import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMaintenanceWindowXAmzTargetEnum {
    AmazonSsmGetMaintenanceWindow = "AmazonSSM.GetMaintenanceWindow"
}
export declare class GetMaintenanceWindowHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMaintenanceWindowXAmzTargetEnum;
}
export declare class GetMaintenanceWindowRequest extends SpeakeasyBase {
    headers: GetMaintenanceWindowHeaders;
    request: shared.GetMaintenanceWindowRequest;
}
export declare class GetMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    doesNotExistException?: any;
    getMaintenanceWindowResult?: shared.GetMaintenanceWindowResult;
    internalServerError?: any;
    statusCode: number;
}
