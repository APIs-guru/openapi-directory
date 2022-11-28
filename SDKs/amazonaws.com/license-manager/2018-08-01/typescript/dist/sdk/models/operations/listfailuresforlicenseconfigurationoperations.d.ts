import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum {
    AwsLicenseManagerListFailuresForLicenseConfigurationOperations = "AWSLicenseManager.ListFailuresForLicenseConfigurationOperations"
}
export declare class ListFailuresForLicenseConfigurationOperationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum;
}
export declare class ListFailuresForLicenseConfigurationOperationsRequest extends SpeakeasyBase {
    headers: ListFailuresForLicenseConfigurationOperationsHeaders;
    request: shared.ListFailuresForLicenseConfigurationOperationsRequest;
}
export declare class ListFailuresForLicenseConfigurationOperationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    listFailuresForLicenseConfigurationOperationsResponse?: shared.ListFailuresForLicenseConfigurationOperationsResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
