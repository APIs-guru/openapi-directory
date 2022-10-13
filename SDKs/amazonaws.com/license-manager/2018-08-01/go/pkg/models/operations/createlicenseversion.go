package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLicenseVersionXAmzTargetEnum string

const (
	CreateLicenseVersionXAmzTargetEnumAwsLicenseManagerCreateLicenseVersion CreateLicenseVersionXAmzTargetEnum = "AWSLicenseManager.CreateLicenseVersion"
)

type CreateLicenseVersionHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLicenseVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLicenseVersionRequest struct {
	Headers CreateLicenseVersionHeaders
	Request shared.CreateLicenseVersionRequest `request:"mediaType=application/json"`
}

type CreateLicenseVersionResponse struct {
	AccessDeniedException        *interface{}
	AuthorizationException       *interface{}
	ConflictException            *interface{}
	ContentType                  string
	CreateLicenseVersionResponse *shared.CreateLicenseVersionResponse
	RateLimitExceededException   *interface{}
	RedirectException            *interface{}
	ResourceNotFoundException    *interface{}
	ServerInternalException      *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
