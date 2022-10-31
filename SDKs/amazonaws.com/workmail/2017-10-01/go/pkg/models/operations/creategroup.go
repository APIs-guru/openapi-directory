package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupXAmzTargetEnum string

const (
	CreateGroupXAmzTargetEnumWorkMailServiceCreateGroup CreateGroupXAmzTargetEnum = "WorkMailService.CreateGroup"
)

type CreateGroupHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
