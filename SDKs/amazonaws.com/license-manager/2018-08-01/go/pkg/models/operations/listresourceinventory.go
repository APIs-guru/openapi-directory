package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourceInventoryXAmzTargetEnum string

const (
	ListResourceInventoryXAmzTargetEnumAwsLicenseManagerListResourceInventory ListResourceInventoryXAmzTargetEnum = "AWSLicenseManager.ListResourceInventory"
)

type ListResourceInventoryHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListResourceInventoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
