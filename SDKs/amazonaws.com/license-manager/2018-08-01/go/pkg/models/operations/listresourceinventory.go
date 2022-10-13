package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourceInventoryXAmzTargetEnum string

const (
	ListResourceInventoryXAmzTargetEnumAwsLicenseManagerListResourceInventory ListResourceInventoryXAmzTargetEnum = "AWSLicenseManager.ListResourceInventory"
)

type ListResourceInventoryHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListResourceInventoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListResourceInventoryRequest struct {
	Headers ListResourceInventoryHeaders
	Request shared.ListResourceInventoryRequest `request:"mediaType=application/json"`
}

type ListResourceInventoryResponse struct {
	AccessDeniedException          *interface{}
	AuthorizationException         *interface{}
	ContentType                    string
	FailedDependencyException      *interface{}
	FilterLimitExceededException   *interface{}
	InvalidParameterValueException *interface{}
	ListResourceInventoryResponse  *shared.ListResourceInventoryResponse
	RateLimitExceededException     *interface{}
	ServerInternalException        *interface{}
	StatusCode                     int64
}
