package operations

import (
	"openapi/pkg/models/shared"
)

type ListBotLocalesPathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
}

type ListBotLocalesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBotLocalesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListBotLocalesRequestBodySortBy struct {
	Attribute *shared.BotLocaleSortAttributeEnum `json:"attribute"`
	Order     *shared.SortOrderEnum              `json:"order"`
}

type ListBotLocalesRequestBody struct {
	Filters    []shared.BotLocaleFilter         `json:"filters"`
	MaxResults *int64                           `json:"maxResults"`
	NextToken  *string                          `json:"nextToken"`
	SortBy     *ListBotLocalesRequestBodySortBy `json:"sortBy"`
}

type ListBotLocalesRequest struct {
	PathParams  ListBotLocalesPathParams
	QueryParams ListBotLocalesQueryParams
	Headers     ListBotLocalesHeaders
	Request     ListBotLocalesRequestBody `request:"mediaType=application/json"`
}

type ListBotLocalesResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	ListBotLocalesResponse        *shared.ListBotLocalesResponse
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
