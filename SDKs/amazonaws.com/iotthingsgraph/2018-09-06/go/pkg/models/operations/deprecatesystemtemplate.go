package operations

import (
	"openapi/pkg/models/shared"
)

type DeprecateSystemTemplateXAmzTargetEnum string

const (
	DeprecateSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceDeprecateSystemTemplate DeprecateSystemTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.DeprecateSystemTemplate"
)

type DeprecateSystemTemplateHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeprecateSystemTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeprecateSystemTemplateRequest struct {
	Headers DeprecateSystemTemplateHeaders
	Request shared.DeprecateSystemTemplateRequest `request:"mediaType=application/json"`
}

type DeprecateSystemTemplateResponse struct {
	ContentType                     string
	DeprecateSystemTemplateResponse map[string]interface{}
	InternalFailureException        *interface{}
	InvalidRequestException         *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
}
