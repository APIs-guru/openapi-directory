package operations

import (
	"openapi/pkg/models/shared"
)

type ListIntentsPathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
}

type ListIntentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListIntentsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListIntentsRequestBodySortBy struct {
	Attribute *shared.IntentSortAttributeEnum `json:"attribute,omitempty"`
	Order     *shared.SortOrderEnum           `json:"order,omitempty"`
}

type ListIntentsRequestBody struct {
	Filters    []shared.IntentFilter         `json:"filters,omitempty"`
	MaxResults *int64                        `json:"maxResults,omitempty"`
	NextToken  *string                       `json:"nextToken,omitempty"`
	SortBy     *ListIntentsRequestBodySortBy `json:"sortBy,omitempty"`
}

type ListIntentsRequest struct {
	PathParams  ListIntentsPathParams
	QueryParams ListIntentsQueryParams
	Headers     ListIntentsHeaders
	Request     ListIntentsRequestBody `request:"mediaType=application/json"`
}

type ListIntentsResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	ListIntentsResponse           *shared.ListIntentsResponse
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
