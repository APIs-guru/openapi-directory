package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateIPGroupsXAmzTargetEnum string

const (
	AssociateIPGroupsXAmzTargetEnumWorkspacesServiceAssociateIPGroups AssociateIPGroupsXAmzTargetEnum = "WorkspacesService.AssociateIpGroups"
)

type AssociateIPGroupsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateIPGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateIPGroupsRequest struct {
	Headers AssociateIPGroupsHeaders
	Request shared.AssociateIPGroupsRequest `request:"mediaType=application/json"`
}

type AssociateIPGroupsResponse struct {
	AccessDeniedException           *interface{}
	AssociateIPGroupsResult         map[string]interface{}
	ContentType                     string
	InvalidParameterValuesException *interface{}
	InvalidResourceStateException   *interface{}
	OperationNotSupportedException  *interface{}
	ResourceLimitExceededException  *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
