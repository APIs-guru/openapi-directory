package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateMemberFromGroupXAmzTargetEnum string

const (
	DisassociateMemberFromGroupXAmzTargetEnumWorkMailServiceDisassociateMemberFromGroup DisassociateMemberFromGroupXAmzTargetEnum = "WorkMailService.DisassociateMemberFromGroup"
)

type DisassociateMemberFromGroupHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateMemberFromGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisassociateMemberFromGroupRequest struct {
	Headers DisassociateMemberFromGroupHeaders
	Request shared.DisassociateMemberFromGroupRequest `request:"mediaType=application/json"`
}

type DisassociateMemberFromGroupResponse struct {
	ContentType                                   string
	DirectoryServiceAuthenticationFailedException *interface{}
	DirectoryUnavailableException                 *interface{}
	DisassociateMemberFromGroupResponse           map[string]interface{}
	EntityNotFoundException                       *interface{}
	EntityStateException                          *interface{}
	InvalidParameterException                     *interface{}
	OrganizationNotFoundException                 *interface{}
	OrganizationStateException                    *interface{}
	StatusCode                                    int64
	UnsupportedOperationException                 *interface{}
}
