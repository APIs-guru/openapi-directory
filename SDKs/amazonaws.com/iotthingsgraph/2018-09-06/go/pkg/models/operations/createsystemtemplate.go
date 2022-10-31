package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSystemTemplateXAmzTargetEnum string

const (
	CreateSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceCreateSystemTemplate CreateSystemTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.CreateSystemTemplate"
)

type CreateSystemTemplateHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSystemTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateSystemTemplateRequest struct {
	Headers CreateSystemTemplateHeaders
	Request shared.CreateSystemTemplateRequest `request:"mediaType=application/json"`
}

type CreateSystemTemplateResponse struct {
	ContentType                    string
	CreateSystemTemplateResponse   *shared.CreateSystemTemplateResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	ResourceAlreadyExistsException *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
