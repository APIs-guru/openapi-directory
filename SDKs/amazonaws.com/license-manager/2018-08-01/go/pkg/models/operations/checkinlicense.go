package operations

import (
	"openapi/pkg/models/shared"
)

type CheckInLicenseXAmzTargetEnum string

const (
	CheckInLicenseXAmzTargetEnumAwsLicenseManagerCheckInLicense CheckInLicenseXAmzTargetEnum = "AWSLicenseManager.CheckInLicense"
)

type CheckInLicenseHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CheckInLicenseXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CheckInLicenseRequest struct {
	Headers CheckInLicenseHeaders
	Request shared.CheckInLicenseRequest `request:"mediaType=application/json"`
}

type CheckInLicenseResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	CheckInLicenseResponse         map[string]interface{}
	ConflictException              *interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	ResourceNotFoundException      *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
