import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLicenseConfigurationXAmzTargetEnum {
    AwsLicenseManagerUpdateLicenseConfiguration = "AWSLicenseManager.UpdateLicenseConfiguration"
}
export declare class UpdateLicenseConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLicenseConfigurationXAmzTargetEnum;
}
export declare class UpdateLicenseConfigurationRequest extends SpeakeasyBase {
    headers: UpdateLicenseConfigurationHeaders;
    request: shared.UpdateLicenseConfigurationRequest;
}
export declare class UpdateLicenseConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    updateLicenseConfigurationResponse?: Map<string, any>;
}
