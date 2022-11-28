import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListLicenseConfigurationsXAmzTargetEnum {
    AwsLicenseManagerListLicenseConfigurations = "AWSLicenseManager.ListLicenseConfigurations"
}
export declare class ListLicenseConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLicenseConfigurationsXAmzTargetEnum;
}
export declare class ListLicenseConfigurationsRequest extends SpeakeasyBase {
    headers: ListLicenseConfigurationsHeaders;
    request: shared.ListLicenseConfigurationsRequest;
}
export declare class ListLicenseConfigurationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    filterLimitExceededException?: any;
    invalidParameterValueException?: any;
    listLicenseConfigurationsResponse?: shared.ListLicenseConfigurationsResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
