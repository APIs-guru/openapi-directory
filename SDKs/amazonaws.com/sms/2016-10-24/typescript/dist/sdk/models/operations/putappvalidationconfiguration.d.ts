import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum PutAppValidationConfigurationXAmzTargetEnum {
    AwsServerMigrationServiceV20161024PutAppValidationConfiguration = "AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration"
}
export declare class PutAppValidationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutAppValidationConfigurationXAmzTargetEnum;
}
export declare class PutAppValidationConfigurationRequest extends SpeakeasyBase {
    headers: PutAppValidationConfigurationHeaders;
    request: shared.PutAppValidationConfigurationRequest;
}
export declare class PutAppValidationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    putAppValidationConfigurationResponse?: Map<string, any>;
    statusCode: number;
    unauthorizedOperationException?: any;
}
