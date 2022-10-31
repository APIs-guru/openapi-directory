package operations

import (
	"openapi/pkg/models/shared"
)

type CheckInLicenseXAmzTargetEnum string

const (
	CheckInLicenseXAmzTargetEnumAwsLicenseManagerCheckInLicense CheckInLicenseXAmzTargetEnum = "AWSLicenseManager.CheckInLicense"
)

type CheckInLicenseHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CheckInLicenseXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
