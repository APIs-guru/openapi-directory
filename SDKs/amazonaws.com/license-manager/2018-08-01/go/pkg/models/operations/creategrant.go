package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGrantXAmzTargetEnum string

const (
	CreateGrantXAmzTargetEnumAwsLicenseManagerCreateGrant CreateGrantXAmzTargetEnum = "AWSLicenseManager.CreateGrant"
)

type CreateGrantHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGrantXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateGrantRequest struct {
	Headers CreateGrantHeaders
	Request shared.CreateGrantRequest `request:"mediaType=application/json"`
}

type CreateGrantResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	CreateGrantResponse            *shared.CreateGrantResponse
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	ResourceLimitExceededException *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
