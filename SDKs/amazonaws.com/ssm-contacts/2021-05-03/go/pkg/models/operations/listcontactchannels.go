package operations

import (
	"openapi/pkg/models/shared"
)

type ListContactChannelsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListContactChannelsXAmzTargetEnum string

const (
	ListContactChannelsXAmzTargetEnumSsmContactsListContactChannels ListContactChannelsXAmzTargetEnum = "SSMContacts.ListContactChannels"
)

type ListContactChannelsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListContactChannelsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListContactChannelsRequest struct {
	QueryParams ListContactChannelsQueryParams
	Headers     ListContactChannelsHeaders
	Request     shared.ListContactChannelsRequest `request:"mediaType=application/json"`
}

type ListContactChannelsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DataEncryptionException   *interface{}
	InternalServerException   *interface{}
	ListContactChannelsResult *shared.ListContactChannelsResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
