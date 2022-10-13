package operations

import (
	"openapi/pkg/models/shared"
)

type CheckoutBorrowLicenseXAmzTargetEnum string

const (
	CheckoutBorrowLicenseXAmzTargetEnumAwsLicenseManagerCheckoutBorrowLicense CheckoutBorrowLicenseXAmzTargetEnum = "AWSLicenseManager.CheckoutBorrowLicense"
)

type CheckoutBorrowLicenseHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CheckoutBorrowLicenseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CheckoutBorrowLicenseRequest struct {
	Headers CheckoutBorrowLicenseHeaders
	Request shared.CheckoutBorrowLicenseRequest `request:"mediaType=application/json"`
}

type CheckoutBorrowLicenseResponse struct {
	AccessDeniedException                      *interface{}
	AuthorizationException                     *interface{}
	CheckoutBorrowLicenseResponse              *shared.CheckoutBorrowLicenseResponse
	ContentType                                string
	EntitlementNotAllowedException             *interface{}
	InvalidParameterValueException             *interface{}
	NoEntitlementsAllowedException             *interface{}
	RateLimitExceededException                 *interface{}
	RedirectException                          *interface{}
	ResourceNotFoundException                  *interface{}
	ServerInternalException                    *interface{}
	StatusCode                                 int64
	UnsupportedDigitalSignatureMethodException *interface{}
	ValidationException                        *interface{}
}
