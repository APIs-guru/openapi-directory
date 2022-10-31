package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateIPGroupsXAmzTargetEnum string

const (
	DisassociateIPGroupsXAmzTargetEnumWorkspacesServiceDisassociateIPGroups DisassociateIPGroupsXAmzTargetEnum = "WorkspacesService.DisassociateIpGroups"
)

type DisassociateIPGroupsHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateIPGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisassociateIPGroupsRequest struct {
	Headers DisassociateIPGroupsHeaders
	Request shared.DisassociateIPGroupsRequest `request:"mediaType=application/json"`
}

type DisassociateIPGroupsResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	DisassociateIPGroupsResult      map[string]interface{}
	InvalidParameterValuesException *interface{}
	InvalidResourceStateException   *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
