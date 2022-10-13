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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListIntentsRequestBodySortBy struct {
	Attribute *shared.IntentSortAttributeEnum `json:"attribute"`
	Order     *shared.SortOrderEnum           `json:"order"`
}

type ListIntentsRequestBody struct {
	Filters    []shared.IntentFilter         `json:"filters"`
	MaxResults *int64                        `json:"maxResults"`
	NextToken  *string                       `json:"nextToken"`
	SortBy     *ListIntentsRequestBodySortBy `json:"sortBy"`
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
