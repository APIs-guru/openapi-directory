import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutAppLaunchConfigurationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024PutAppLaunchConfiguration = "AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration"
}
export declare class PutAppLaunchConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAppLaunchConfigurationXAmzTargetEnum;
}
export declare class PutAppLaunchConfigurationRequest extends SpeakeasyBase {
    headers: PutAppLaunchConfigurationHeaders;
    request: shared.PutAppLaunchConfigurationRequest;
}
export declare class PutAppLaunchConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    putAppLaunchConfigurationResponse?: Map<string, any>;
    statusCode: number;
    unauthorizedOperationException?: any;
}
