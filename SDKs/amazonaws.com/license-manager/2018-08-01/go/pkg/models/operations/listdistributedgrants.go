package operations

import (
	"openapi/pkg/models/shared"
)

type ListDistributedGrantsXAmzTargetEnum string

const (
	ListDistributedGrantsXAmzTargetEnumAwsLicenseManagerListDistributedGrants ListDistributedGrantsXAmzTargetEnum = "AWSLicenseManager.ListDistributedGrants"
)

type ListDistributedGrantsHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListDistributedGrantsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListDistributedGrantsRequest struct {
	Headers ListDistributedGrantsHeaders
	Request shared.ListDistributedGrantsRequest `request:"mediaType=application/json"`
}

type ListDistributedGrantsResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	InvalidParameterValueException *interface{}
	ListDistributedGrantsResponse  *shared.ListDistributedGrantsResponse
	RateLimitExceededException     *interface{}
	ResourceLimitExceededException *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
