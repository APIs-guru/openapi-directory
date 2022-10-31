package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGroupXAmzTargetEnum string

const (
	DeleteGroupXAmzTargetEnumWorkMailServiceDeleteGroup DeleteGroupXAmzTargetEnum = "WorkMailService.DeleteGroup"
)

type DeleteGroupHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteGroupRequest struct {
	Headers DeleteGroupHeaders
	Request shared.DeleteGroupRequest `request:"mediaType=application/json"`
}

type DeleteGroupResponse struct {
	ContentType                                   string
	DeleteGroupResponse                           map[string]interface{}
	DirectoryServiceAuthenticationFailedException *interface{}
	DirectoryUnavailableException                 *interface{}
	EntityStateException                          *interface{}
	InvalidParameterException                     *interface{}
	OrganizationNotFoundException                 *interface{}
	OrganizationStateException                    *interface{}
	StatusCode                                    int64
	UnsupportedOperationException                 *interface{}
}
