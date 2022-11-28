import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLicenseXAmzTargetEnum {
    AwsLicenseManagerGetLicense = "AWSLicenseManager.GetLicense"
}
export declare class GetLicenseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLicenseXAmzTargetEnum;
}
export declare class GetLicenseRequest extends SpeakeasyBase {
    headers: GetLicenseHeaders;
    request: shared.GetLicenseRequest;
}
export declare class GetLicenseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    getLicenseResponse?: shared.GetLicenseResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
