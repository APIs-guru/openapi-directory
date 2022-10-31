package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSystemInstanceXAmzTargetEnum string

const (
	CreateSystemInstanceXAmzTargetEnumIotThingsGraphFrontEndServiceCreateSystemInstance CreateSystemInstanceXAmzTargetEnum = "IotThingsGraphFrontEndService.CreateSystemInstance"
)

type CreateSystemInstanceHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSystemInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateSystemInstanceRequest struct {
	Headers CreateSystemInstanceHeaders
	Request shared.CreateSystemInstanceRequest `request:"mediaType=application/json"`
}

type CreateSystemInstanceResponse struct {
	ContentType                    string
	CreateSystemInstanceResponse   *shared.CreateSystemInstanceResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
