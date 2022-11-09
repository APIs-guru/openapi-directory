import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteAppValidationConfigurationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024DeleteAppValidationConfiguration = "AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration"
}
export declare class DeleteAppValidationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAppValidationConfigurationXAmzTargetEnum;
}
export declare class DeleteAppValidationConfigurationRequest extends SpeakeasyBase {
    headers: DeleteAppValidationConfigurationHeaders;
    request: shared.DeleteAppValidationConfigurationRequest;
}
export declare class DeleteAppValidationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    deleteAppValidationConfigurationResponse?: Map<string, any>;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
