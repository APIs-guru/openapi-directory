package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSystemTemplateXAmzTargetEnum string

const (
	CreateSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceCreateSystemTemplate CreateSystemTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.CreateSystemTemplate"
)

type CreateSystemTemplateHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSystemTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
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
