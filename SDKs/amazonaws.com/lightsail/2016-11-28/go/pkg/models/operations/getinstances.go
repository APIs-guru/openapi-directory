package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstancesXAmzTargetEnum string

const (
	GetInstancesXAmzTargetEnumLightsail20161128GetInstances GetInstancesXAmzTargetEnum = "Lightsail_20161128.GetInstances"
)

type GetInstancesHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetInstancesRequest struct {
	Headers GetInstancesHeaders
	Request shared.GetInstancesRequest `request:"mediaType=application/json"`
}

type GetInstancesResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetInstancesResult              *shared.GetInstancesResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
