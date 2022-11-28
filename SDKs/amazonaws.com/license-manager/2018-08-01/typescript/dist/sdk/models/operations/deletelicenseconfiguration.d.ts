import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteLicenseConfigurationXAmzTargetEnum {
    AwsLicenseManagerDeleteLicenseConfiguration = "AWSLicenseManager.DeleteLicenseConfiguration"
}
export declare class DeleteLicenseConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLicenseConfigurationXAmzTargetEnum;
}
export declare class DeleteLicenseConfigurationRequest extends SpeakeasyBase {
    headers: DeleteLicenseConfigurationHeaders;
    request: shared.DeleteLicenseConfigurationRequest;
}
export declare class DeleteLicenseConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    deleteLicenseConfigurationResponse?: Map<string, any>;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
