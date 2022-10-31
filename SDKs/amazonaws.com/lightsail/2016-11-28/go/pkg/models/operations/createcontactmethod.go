package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContactMethodXAmzTargetEnum string

const (
	CreateContactMethodXAmzTargetEnumLightsail20161128CreateContactMethod CreateContactMethodXAmzTargetEnum = "Lightsail_20161128.CreateContactMethod"
)

type CreateContactMethodHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateContactMethodXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateContactMethodRequest struct {
	Headers CreateContactMethodHeaders
	Request shared.CreateContactMethodRequest `request:"mediaType=application/json"`
}

type CreateContactMethodResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	CreateContactMethodResult *shared.CreateContactMethodResult
	InvalidInputException     *interface{}
	NotFoundException         *interface{}
	OperationFailureException *interface{}
	ServiceException          *interface{}
	StatusCode                int64
	UnauthenticatedException  *interface{}
}
