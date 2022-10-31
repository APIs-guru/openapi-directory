package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkspaceBundleXAmzTargetEnum string

const (
	DeleteWorkspaceBundleXAmzTargetEnumWorkspacesServiceDeleteWorkspaceBundle DeleteWorkspaceBundleXAmzTargetEnum = "WorkspacesService.DeleteWorkspaceBundle"
)

type DeleteWorkspaceBundleHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWorkspaceBundleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteWorkspaceBundleRequest struct {
	Headers DeleteWorkspaceBundleHeaders
	Request shared.DeleteWorkspaceBundleRequest `request:"mediaType=application/json"`
}

type DeleteWorkspaceBundleResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	DeleteWorkspaceBundleResult     map[string]interface{}
	InvalidParameterValuesException *interface{}
	ResourceAssociatedException     *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
