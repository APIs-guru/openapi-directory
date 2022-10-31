package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstancePortStatesXAmzTargetEnum string

const (
	GetInstancePortStatesXAmzTargetEnumLightsail20161128GetInstancePortStates GetInstancePortStatesXAmzTargetEnum = "Lightsail_20161128.GetInstancePortStates"
)

type GetInstancePortStatesHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstancePortStatesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetInstancePortStatesRequest struct {
	Headers GetInstancePortStatesHeaders
	Request shared.GetInstancePortStatesRequest `request:"mediaType=application/json"`
}

type GetInstancePortStatesResponse struct {
	AccessDeniedException           *interface{}
	AccountSetupInProgressException *interface{}
	ContentType                     string
	GetInstancePortStatesResult     *shared.GetInstancePortStatesResult
	InvalidInputException           *interface{}
	NotFoundException               *interface{}
	OperationFailureException       *interface{}
	ServiceException                *interface{}
	StatusCode                      int64
	UnauthenticatedException        *interface{}
}
