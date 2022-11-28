import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAssociationsForLicenseConfigurationXAmzTargetEnum {
    AwsLicenseManagerListAssociationsForLicenseConfiguration = "AWSLicenseManager.ListAssociationsForLicenseConfiguration"
}
export declare class ListAssociationsForLicenseConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAssociationsForLicenseConfigurationXAmzTargetEnum;
}
export declare class ListAssociationsForLicenseConfigurationRequest extends SpeakeasyBase {
    headers: ListAssociationsForLicenseConfigurationHeaders;
    request: shared.ListAssociationsForLicenseConfigurationRequest;
}
export declare class ListAssociationsForLicenseConfigurationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    filterLimitExceededException?: any;
    invalidParameterValueException?: any;
    listAssociationsForLicenseConfigurationResponse?: shared.ListAssociationsForLicenseConfigurationResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
