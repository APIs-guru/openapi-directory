package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteContactMethodXAmzTargetEnum string

const (
	DeleteContactMethodXAmzTargetEnumLightsail20161128DeleteContactMethod DeleteContactMethodXAmzTargetEnum = "Lightsail_20161128.DeleteContactMethod"
)

type DeleteContactMethodHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteContactMethodXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteContactMethodRequest struct {
	Headers DeleteContactMethodHeaders
	Request shared.DeleteContactMethodRequest `request:"mediaType=application/json"`
}

type DeleteContactMethodResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeleteContactMethodResult *shared.DeleteContactMethodResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}
