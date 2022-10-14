package operations

import (
	"openapi/pkg/models/shared"
)

type ListBotVersionsPathParams struct {
	BotID string `pathParam:"style=simple,explode=false,name=botId"`
}

type ListBotVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBotVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListBotVersionsRequestBodySortBy struct {
	Attribute *shared.BotVersionSortAttributeEnum `json:"attribute,omitempty"`
	Order     *shared.SortOrderEnum               `json:"order,omitempty"`
}

type ListBotVersionsRequestBody struct {
	MaxResults *int64                            `json:"maxResults,omitempty"`
	NextToken  *string                           `json:"nextToken,omitempty"`
	SortBy     *ListBotVersionsRequestBodySortBy `json:"sortBy,omitempty"`
}

type ListBotVersionsRequest struct {
	PathParams  ListBotVersionsPathParams
	QueryParams ListBotVersionsQueryParams
	Headers     ListBotVersionsHeaders
	Request     ListBotVersionsRequestBody `request:"mediaType=application/json"`
}

type ListBotVersionsResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	ListBotVersionsResponse       *shared.ListBotVersionsResponse
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
