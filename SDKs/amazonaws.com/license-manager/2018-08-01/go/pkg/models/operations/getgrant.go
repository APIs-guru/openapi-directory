package operations

import (
	"openapi/pkg/models/shared"
)

type GetGrantXAmzTargetEnum string

const (
	GetGrantXAmzTargetEnumAwsLicenseManagerGetGrant GetGrantXAmzTargetEnum = "AWSLicenseManager.GetGrant"
)

type GetGrantHeaders struct {
	XAmzAlgorithm     *string                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetGrantXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
