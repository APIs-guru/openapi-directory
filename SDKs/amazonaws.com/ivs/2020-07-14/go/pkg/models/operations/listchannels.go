package operations

import (
	"openapi/pkg/models/shared"
)

type ListChannelsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListChannelsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListChannelsRequestBody struct {
	FilterByName                      *string `json:"filterByName,omitempty"`
	FilterByRecordingConfigurationArn *string `json:"filterByRecordingConfigurationArn,omitempty"`
	MaxResults                        *int64  `json:"maxResults,omitempty"`
	NextToken                         *string `json:"nextToken,omitempty"`
}

type ListChannelsRequest struct {
	QueryParams ListChannelsQueryParams
	Headers     ListChannelsHeaders
	Request     ListChannelsRequestBody `request:"mediaType=application/json"`
}

type ListChannelsResponse struct {
	AccessDeniedException *interface{}
	ConflictException     *interface{}
	ContentType           string
	ListChannelsResponse  *shared.ListChannelsResponse
	StatusCode            int64
	ValidationException   *interface{}
}
