import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLicenseConfigurationXAmzTargetEnum {
    AwsLicenseManagerCreateLicenseConfiguration = "AWSLicenseManager.CreateLicenseConfiguration"
}
export declare class CreateLicenseConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLicenseConfigurationXAmzTargetEnum;
}
export declare class CreateLicenseConfigurationRequest extends SpeakeasyBase {
    headers: CreateLicenseConfigurationHeaders;
    request: shared.CreateLicenseConfigurationRequest;
}
export declare class CreateLicenseConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    createLicenseConfigurationResponse?: shared.CreateLicenseConfigurationResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
