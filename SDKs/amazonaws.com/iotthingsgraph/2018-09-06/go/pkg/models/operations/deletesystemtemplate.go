package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSystemTemplateXAmzTargetEnum string

const (
	DeleteSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceDeleteSystemTemplate DeleteSystemTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.DeleteSystemTemplate"
)

type DeleteSystemTemplateHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSystemTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteSystemTemplateRequest struct {
	Headers DeleteSystemTemplateHeaders
	Request shared.DeleteSystemTemplateRequest `request:"mediaType=application/json"`
}

type DeleteSystemTemplateResponse struct {
	ContentType                  string
	DeleteSystemTemplateResponse map[string]interface{}
	InternalFailureException     *interface{}
	InvalidRequestException      *interface{}
	ResourceInUseException       *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
}
