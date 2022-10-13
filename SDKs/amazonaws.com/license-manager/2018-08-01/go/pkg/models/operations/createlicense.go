package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLicenseXAmzTargetEnum string

const (
	CreateLicenseXAmzTargetEnumAwsLicenseManagerCreateLicense CreateLicenseXAmzTargetEnum = "AWSLicenseManager.CreateLicense"
)

type CreateLicenseHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLicenseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLicenseRequest struct {
	Headers CreateLicenseHeaders
	Request shared.CreateLicenseRequest `request:"mediaType=application/json"`
}

type CreateLicenseResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	CreateLicenseResponse          *shared.CreateLicenseResponse
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	RedirectException              *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
