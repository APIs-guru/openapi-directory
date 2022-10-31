package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInstancesXAmzTargetEnum string

const (
	CreateInstancesXAmzTargetEnumLightsail20161128CreateInstances CreateInstancesXAmzTargetEnum = "Lightsail_20161128.CreateInstances"
)

type CreateInstancesHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateInstancesRequest struct {
	Headers CreateInstancesHeaders
	Request shared.CreateInstancesRequest `request:"mediaType=application/json"`
}

type CreateInstancesResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	CreateInstancesResult           *shared.CreateInstancesResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
