package operations

import (
	"openapi/pkg/models/shared"
)

type CheckoutLicenseXAmzTargetEnum string

const (
	CheckoutLicenseXAmzTargetEnumAwsLicenseManagerCheckoutLicense CheckoutLicenseXAmzTargetEnum = "AWSLicenseManager.CheckoutLicense"
)

type CheckoutLicenseHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CheckoutLicenseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CheckoutLicenseRequest struct {
	Headers CheckoutLicenseHeaders
	Request shared.CheckoutLicenseRequest `request:"mediaType=application/json"`
}

type CheckoutLicenseResponse struct {
	AccessDeniedException                      *interface{}
	AuthorizationException                     *interface{}
	CheckoutLicenseResponse                    *shared.CheckoutLicenseResponse
	ContentType                                string
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
