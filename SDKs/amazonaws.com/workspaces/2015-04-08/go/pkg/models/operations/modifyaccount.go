package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyAccountXAmzTargetEnum string

const (
	ModifyAccountXAmzTargetEnumWorkspacesServiceModifyAccount ModifyAccountXAmzTargetEnum = "WorkspacesService.ModifyAccount"
)

type ModifyAccountHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyAccountXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ModifyAccountRequest struct {
	Headers ModifyAccountHeaders
	Request shared.ModifyAccountRequest `request:"mediaType=application/json"`
}

type ModifyAccountResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InvalidParameterValuesException *interface{}
	InvalidResourceStateException   *interface{}
	ModifyAccountResult             map[string]interface{}
	ResourceNotFoundException       *interface{}
	ResourceUnavailableException    *interface{}
	StatusCode                      int64
}
