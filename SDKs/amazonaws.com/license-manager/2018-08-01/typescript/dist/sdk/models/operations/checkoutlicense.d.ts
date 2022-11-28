import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CheckoutLicenseXAmzTargetEnum {
    AwsLicenseManagerCheckoutLicense = "AWSLicenseManager.CheckoutLicense"
}
export declare class CheckoutLicenseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckoutLicenseXAmzTargetEnum;
}
export declare class CheckoutLicenseRequest extends SpeakeasyBase {
    headers: CheckoutLicenseHeaders;
    request: shared.CheckoutLicenseRequest;
}
export declare class CheckoutLicenseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    checkoutLicenseResponse?: shared.CheckoutLicenseResponse;
    contentType: string;
    invalidParameterValueException?: any;
    noEntitlementsAllowedException?: any;
    rateLimitExceededException?: any;
    redirectException?: any;
    resourceNotFoundException?: any;
    serverInternalException?: any;
    statusCode: number;
    unsupportedDigitalSignatureMethodException?: any;
    validationException?: any;
}
