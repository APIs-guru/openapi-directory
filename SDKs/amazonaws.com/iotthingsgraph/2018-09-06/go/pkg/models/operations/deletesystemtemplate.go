package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSystemTemplateXAmzTargetEnum string

const (
	DeleteSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceDeleteSystemTemplate DeleteSystemTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.DeleteSystemTemplate"
)

type DeleteSystemTemplateHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteSystemTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
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
