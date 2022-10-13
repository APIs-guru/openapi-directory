package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateMemberToGroupXAmzTargetEnum string

const (
	AssociateMemberToGroupXAmzTargetEnumWorkMailServiceAssociateMemberToGroup AssociateMemberToGroupXAmzTargetEnum = "WorkMailService.AssociateMemberToGroup"
)

type AssociateMemberToGroupHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateMemberToGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateMemberToGroupRequest struct {
	Headers AssociateMemberToGroupHeaders
	Request shared.AssociateMemberToGroupRequest `request:"mediaType=application/json"`
}

type AssociateMemberToGroupResponse struct {
	AssociateMemberToGroupResponse                map[string]interface{}
	ContentType                                   string
	DirectoryServiceAuthenticationFailedException *interface{}
	DirectoryUnavailableException                 *interface{}
	EntityNotFoundException                       *interface{}
	EntityStateException                          *interface{}
	InvalidParameterException                     *interface{}
	OrganizationNotFoundException                 *interface{}
	OrganizationStateException                    *interface{}
	StatusCode                                    int64
	UnsupportedOperationException                 *interface{}
}
