import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAppValidationConfigurationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetAppValidationConfiguration = "AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration"
}
export declare class GetAppValidationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppValidationConfigurationXAmzTargetEnum;
}
export declare class GetAppValidationConfigurationRequest extends SpeakeasyBase {
    headers: GetAppValidationConfigurationHeaders;
    request: shared.GetAppValidationConfigurationRequest;
}
export declare class GetAppValidationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    getAppValidationConfigurationResponse?: shared.GetAppValidationConfigurationResponse;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
