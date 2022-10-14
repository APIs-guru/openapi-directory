package operations

import (
	"openapi/pkg/models/shared"
)

type ListStreamKeysQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListStreamKeysHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListStreamKeysRequestBody struct {
	ChannelArn string  `json:"channelArn"`
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}

type ListStreamKeysRequest struct {
	QueryParams ListStreamKeysQueryParams
	Headers     ListStreamKeysHeaders
	Request     ListStreamKeysRequestBody `request:"mediaType=application/json"`
}

type ListStreamKeysResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	ListStreamKeysResponse    *shared.ListStreamKeysResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
