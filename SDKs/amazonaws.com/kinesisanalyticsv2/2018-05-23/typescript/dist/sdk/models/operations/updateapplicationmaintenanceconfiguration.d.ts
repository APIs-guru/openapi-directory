import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateApplicationMaintenanceConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523UpdateApplicationMaintenanceConfiguration = "KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration"
}
export declare class UpdateApplicationMaintenanceConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApplicationMaintenanceConfigurationXAmzTargetEnum;
}
export declare class UpdateApplicationMaintenanceConfigurationRequest extends SpeakeasyBase {
    headers: UpdateApplicationMaintenanceConfigurationHeaders;
    request: shared.UpdateApplicationMaintenanceConfigurationRequest;
}
export declare class UpdateApplicationMaintenanceConfigurationResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
    updateApplicationMaintenanceConfigurationResponse?: shared.UpdateApplicationMaintenanceConfigurationResponse;
}
