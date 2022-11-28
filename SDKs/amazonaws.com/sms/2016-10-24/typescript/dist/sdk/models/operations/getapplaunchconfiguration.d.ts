import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAppLaunchConfigurationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetAppLaunchConfiguration = "AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration"
}
export declare class GetAppLaunchConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppLaunchConfigurationXAmzTargetEnum;
}
export declare class GetAppLaunchConfigurationRequest extends SpeakeasyBase {
    headers: GetAppLaunchConfigurationHeaders;
    request: shared.GetAppLaunchConfigurationRequest;
}
export declare class GetAppLaunchConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getAppLaunchConfigurationResponse?: shared.GetAppLaunchConfigurationResponse;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
