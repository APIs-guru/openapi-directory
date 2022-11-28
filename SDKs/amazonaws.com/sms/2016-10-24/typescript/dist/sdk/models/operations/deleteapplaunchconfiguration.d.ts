import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteAppLaunchConfigurationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024DeleteAppLaunchConfiguration = "AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration"
}
export declare class DeleteAppLaunchConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppLaunchConfigurationXAmzTargetEnum;
}
export declare class DeleteAppLaunchConfigurationRequest extends SpeakeasyBase {
    headers: DeleteAppLaunchConfigurationHeaders;
    request: shared.DeleteAppLaunchConfigurationRequest;
}
export declare class DeleteAppLaunchConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    deleteAppLaunchConfigurationResponse?: Map<string, any>;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
