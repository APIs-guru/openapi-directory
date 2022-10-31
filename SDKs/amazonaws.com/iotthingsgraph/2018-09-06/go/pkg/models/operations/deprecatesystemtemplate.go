package operations

import (
	"openapi/pkg/models/shared"
)

type DeprecateSystemTemplateXAmzTargetEnum string

const (
	DeprecateSystemTemplateXAmzTargetEnumIotThingsGraphFrontEndServiceDeprecateSystemTemplate DeprecateSystemTemplateXAmzTargetEnum = "IotThingsGraphFrontEndService.DeprecateSystemTemplate"
)

type DeprecateSystemTemplateHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeprecateSystemTemplateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
