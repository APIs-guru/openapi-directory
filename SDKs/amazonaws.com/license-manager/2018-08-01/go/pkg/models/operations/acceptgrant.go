package operations

import (
	"openapi/pkg/models/shared"
)

type AcceptGrantXAmzTargetEnum string

const (
	AcceptGrantXAmzTargetEnumAwsLicenseManagerAcceptGrant AcceptGrantXAmzTargetEnum = "AWSLicenseManager.AcceptGrant"
)

type AcceptGrantHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AcceptGrantXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AcceptGrantRequest struct {
	Headers AcceptGrantHeaders
	Request shared.AcceptGrantRequest `request:"mediaType=application/json"`
}

type AcceptGrantResponse struct {
	AcceptGrantResponse            *shared.AcceptGrantResponse
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	RateLimitExceededException     *interface{}
	ResourceLimitExceededException *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
