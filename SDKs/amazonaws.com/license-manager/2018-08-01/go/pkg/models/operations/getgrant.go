package operations

import (
	"openapi/pkg/models/shared"
)

type GetGrantXAmzTargetEnum string

const (
	GetGrantXAmzTargetEnumAwsLicenseManagerGetGrant GetGrantXAmzTargetEnum = "AWSLicenseManager.GetGrant"
)

type GetGrantHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetGrantXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetGrantRequest struct {
	Headers GetGrantHeaders
	Request shared.GetGrantRequest `request:"mediaType=application/json"`
}

type GetGrantResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	GetGrantResponse               *shared.GetGrantResponse
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	ResourceLimitExceededException *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
