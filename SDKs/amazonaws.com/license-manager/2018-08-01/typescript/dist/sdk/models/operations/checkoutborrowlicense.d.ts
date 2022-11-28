import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CheckoutBorrowLicenseXAmzTargetEnum {
    AwsLicenseManagerCheckoutBorrowLicense = "AWSLicenseManager.CheckoutBorrowLicense"
}
export declare class CheckoutBorrowLicenseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckoutBorrowLicenseXAmzTargetEnum;
}
export declare class CheckoutBorrowLicenseRequest extends SpeakeasyBase {
    headers: CheckoutBorrowLicenseHeaders;
    request: shared.CheckoutBorrowLicenseRequest;
}
export declare class CheckoutBorrowLicenseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    checkoutBorrowLicenseResponse?: shared.CheckoutBorrowLicenseResponse;
    contentType: string;
    entitlementNotAllowedException?: any;
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
