package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTokenXAmzTargetEnum string

const (
	CreateTokenXAmzTargetEnumAwsLicenseManagerCreateToken CreateTokenXAmzTargetEnum = "AWSLicenseManager.CreateToken"
)

type CreateTokenHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTokenXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateTokenRequest struct {
	Headers CreateTokenHeaders
	Request shared.CreateTokenRequest `request:"mediaType=application/json"`
}

type CreateTokenResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	CreateTokenResponse            *shared.CreateTokenResponse
	RateLimitExceededException     *interface{}
	RedirectException              *interface{}
	ResourceLimitExceededException *interface{}
	ResourceNotFoundException      *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
