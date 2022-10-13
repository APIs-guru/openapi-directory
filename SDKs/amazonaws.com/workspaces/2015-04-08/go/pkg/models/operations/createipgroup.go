package operations

import (
	"openapi/pkg/models/shared"
)

type CreateIPGroupXAmzTargetEnum string

const (
	CreateIPGroupXAmzTargetEnumWorkspacesServiceCreateIPGroup CreateIPGroupXAmzTargetEnum = "WorkspacesService.CreateIpGroup"
)

type CreateIPGroupHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateIPGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateIPGroupRequest struct {
	Headers CreateIPGroupHeaders
	Request shared.CreateIPGroupRequest `request:"mediaType=application/json"`
}

type CreateIPGroupResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	CreateIPGroupResult             *shared.CreateIPGroupResult
	InvalidParameterValuesException *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceCreationFailedException *interface{}
	ResourceLimitExceededException  *interface{}
	StatusCode                      int64
}
