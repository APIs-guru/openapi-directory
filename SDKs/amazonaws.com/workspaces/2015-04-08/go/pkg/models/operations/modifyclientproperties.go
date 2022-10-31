package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyClientPropertiesXAmzTargetEnum string

const (
	ModifyClientPropertiesXAmzTargetEnumWorkspacesServiceModifyClientProperties ModifyClientPropertiesXAmzTargetEnum = "WorkspacesService.ModifyClientProperties"
)

type ModifyClientPropertiesHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyClientPropertiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
