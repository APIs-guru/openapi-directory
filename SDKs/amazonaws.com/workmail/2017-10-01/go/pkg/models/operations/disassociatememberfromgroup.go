package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateMemberFromGroupXAmzTargetEnum string

const (
	DisassociateMemberFromGroupXAmzTargetEnumWorkMailServiceDisassociateMemberFromGroup DisassociateMemberFromGroupXAmzTargetEnum = "WorkMailService.DisassociateMemberFromGroup"
)

type DisassociateMemberFromGroupHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateMemberFromGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
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
