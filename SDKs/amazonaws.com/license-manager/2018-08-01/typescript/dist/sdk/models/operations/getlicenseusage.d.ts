import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLicenseUsageXAmzTargetEnum {
    AwsLicenseManagerGetLicenseUsage = "AWSLicenseManager.GetLicenseUsage"
}
export declare class GetLicenseUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLicenseUsageXAmzTargetEnum;
}
export declare class GetLicenseUsageRequest extends SpeakeasyBase {
    headers: GetLicenseUsageHeaders;
    request: shared.GetLicenseUsageRequest;
}
export declare class GetLicenseUsageResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    getLicenseUsageResponse?: shared.GetLicenseUsageResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
