import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLicenseSpecificationsForResourceXAmzTargetEnum {
    AwsLicenseManagerUpdateLicenseSpecificationsForResource = "AWSLicenseManager.UpdateLicenseSpecificationsForResource"
}
export declare class UpdateLicenseSpecificationsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLicenseSpecificationsForResourceXAmzTargetEnum;
}
export declare class UpdateLicenseSpecificationsForResourceRequest extends SpeakeasyBase {
    headers: UpdateLicenseSpecificationsForResourceHeaders;
    request: shared.UpdateLicenseSpecificationsForResourceRequest;
}
export declare class UpdateLicenseSpecificationsForResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    invalidResourceStateException?: any;
    licenseUsageException?: any;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    updateLicenseSpecificationsForResourceResponse?: Map<string, any>;
}
