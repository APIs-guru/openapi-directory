package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupXAmzTargetEnum string

const (
	CreateGroupXAmzTargetEnumWorkMailServiceCreateGroup CreateGroupXAmzTargetEnum = "WorkMailService.CreateGroup"
)

type CreateGroupHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateGroupRequest struct {
	Headers CreateGroupHeaders
	Request shared.CreateGroupRequest `request:"mediaType=application/json"`
}

type CreateGroupResponse struct {
	ContentType                                   string
	CreateGroupResponse                           *shared.CreateGroupResponse
	DirectoryServiceAuthenticationFailedException *interface{}
	DirectoryUnavailableException                 *interface{}
	InvalidParameterException                     *interface{}
	NameAvailabilityException                     *interface{}
	OrganizationNotFoundException                 *interface{}
	OrganizationStateException                    *interface{}
	ReservedNameException                         *interface{}
	StatusCode                                    int64
	UnsupportedOperationException                 *interface{}
}
