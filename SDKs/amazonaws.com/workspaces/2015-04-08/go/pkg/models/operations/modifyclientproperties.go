package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyClientPropertiesXAmzTargetEnum string

const (
	ModifyClientPropertiesXAmzTargetEnumWorkspacesServiceModifyClientProperties ModifyClientPropertiesXAmzTargetEnum = "WorkspacesService.ModifyClientProperties"
)

type ModifyClientPropertiesHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyClientPropertiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyClientPropertiesRequest struct {
	Headers ModifyClientPropertiesHeaders
	Request shared.ModifyClientPropertiesRequest `request:"mediaType=application/json"`
}

type ModifyClientPropertiesResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InvalidParameterValuesException *interface{}
	ModifyClientPropertiesResult    map[string]interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
