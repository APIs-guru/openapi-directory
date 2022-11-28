import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLicenseConfigurationXAmzTargetEnum {
    AwsLicenseManagerGetLicenseConfiguration = "AWSLicenseManager.GetLicenseConfiguration"
}
export declare class GetLicenseConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLicenseConfigurationXAmzTargetEnum;
}
export declare class GetLicenseConfigurationRequest extends SpeakeasyBase {
    headers: GetLicenseConfigurationHeaders;
    request: shared.GetLicenseConfigurationRequest;
}
export declare class GetLicenseConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    getLicenseConfigurationResponse?: shared.GetLicenseConfigurationResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
