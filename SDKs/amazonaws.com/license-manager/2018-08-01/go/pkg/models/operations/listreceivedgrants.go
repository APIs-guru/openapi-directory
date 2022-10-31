package operations

import (
	"openapi/pkg/models/shared"
)

type ListReceivedGrantsXAmzTargetEnum string

const (
	ListReceivedGrantsXAmzTargetEnumAwsLicenseManagerListReceivedGrants ListReceivedGrantsXAmzTargetEnum = "AWSLicenseManager.ListReceivedGrants"
)

type ListReceivedGrantsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListReceivedGrantsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListReceivedGrantsRequest struct {
	Headers ListReceivedGrantsHeaders
	Request shared.ListReceivedGrantsRequest `request:"mediaType=application/json"`
}

type ListReceivedGrantsResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	ListReceivedGrantsResponse     *shared.ListReceivedGrantsResponse
	RateLimitExceededException     *interface{}
	ResourceLimitExceededException *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
