package operations

import (
	"openapi/pkg/models/shared"
)

type RejectGrantXAmzTargetEnum string

const (
	RejectGrantXAmzTargetEnumAwsLicenseManagerRejectGrant RejectGrantXAmzTargetEnum = "AWSLicenseManager.RejectGrant"
)

type RejectGrantHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RejectGrantXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RejectGrantRequest struct {
	Headers RejectGrantHeaders
	Request shared.RejectGrantRequest `request:"mediaType=application/json"`
}

type RejectGrantResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	RejectGrantResponse            *shared.RejectGrantResponse
	ResourceLimitExceededException *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
