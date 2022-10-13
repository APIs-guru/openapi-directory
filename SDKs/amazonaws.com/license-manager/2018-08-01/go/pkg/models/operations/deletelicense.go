package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLicenseXAmzTargetEnum string

const (
	DeleteLicenseXAmzTargetEnumAwsLicenseManagerDeleteLicense DeleteLicenseXAmzTargetEnum = "AWSLicenseManager.DeleteLicense"
)

type DeleteLicenseHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLicenseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLicenseRequest struct {
	Headers DeleteLicenseHeaders
	Request shared.DeleteLicenseRequest `request:"mediaType=application/json"`
}

type DeleteLicenseResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ConflictException              *interface{}
	ContentType                    string
	DeleteLicenseResponse          *shared.DeleteLicenseResponse
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	RedirectException              *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
