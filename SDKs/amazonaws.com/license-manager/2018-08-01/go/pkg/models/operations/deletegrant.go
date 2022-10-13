package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGrantXAmzTargetEnum string

const (
	DeleteGrantXAmzTargetEnumAwsLicenseManagerDeleteGrant DeleteGrantXAmzTargetEnum = "AWSLicenseManager.DeleteGrant"
)

type DeleteGrantHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteGrantXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteGrantRequest struct {
	Headers DeleteGrantHeaders
	Request shared.DeleteGrantRequest `request:"mediaType=application/json"`
}

type DeleteGrantResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	DeleteGrantResponse            *shared.DeleteGrantResponse
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	ResourceLimitExceededException *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
