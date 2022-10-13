package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTokenXAmzTargetEnum string

const (
	DeleteTokenXAmzTargetEnumAwsLicenseManagerDeleteToken DeleteTokenXAmzTargetEnum = "AWSLicenseManager.DeleteToken"
)

type DeleteTokenHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTokenXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteTokenRequest struct {
	Headers DeleteTokenHeaders
	Request shared.DeleteTokenRequest `request:"mediaType=application/json"`
}

type DeleteTokenResponse struct {
	AccessDeniedException      *interface{}
	AuthorizationException     *interface{}
	ContentType                string
	DeleteTokenResponse        map[string]interface{}
	RateLimitExceededException *interface{}
	RedirectException          *interface{}
	ResourceNotFoundException  *interface{}
	ServerInternalException    *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
