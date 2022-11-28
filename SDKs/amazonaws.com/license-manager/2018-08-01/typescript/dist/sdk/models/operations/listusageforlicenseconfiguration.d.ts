import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListUsageForLicenseConfigurationXAmzTargetEnum {
    AwsLicenseManagerListUsageForLicenseConfiguration = "AWSLicenseManager.ListUsageForLicenseConfiguration"
}
export declare class ListUsageForLicenseConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUsageForLicenseConfigurationXAmzTargetEnum;
}
export declare class ListUsageForLicenseConfigurationRequest extends SpeakeasyBase {
    headers: ListUsageForLicenseConfigurationHeaders;
    request: shared.ListUsageForLicenseConfigurationRequest;
}
export declare class ListUsageForLicenseConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    filterLimitExceededException?: any;
    invalidParameterValueException?: any;
    listUsageForLicenseConfigurationResponse?: shared.ListUsageForLicenseConfigurationResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
