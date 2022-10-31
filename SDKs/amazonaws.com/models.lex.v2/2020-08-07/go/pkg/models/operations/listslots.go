package operations

import (
	"openapi/pkg/models/shared"
)

type ListSlotsPathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
	IntentID   string `pathParam:"style=simple,explode=false,name=intentId"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
}

type ListSlotsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListSlotsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListSlotsRequestBodySortBy struct {
	Attribute *shared.SlotSortAttributeEnum `json:"attribute,omitempty"`
	Order     *shared.SortOrderEnum         `json:"order,omitempty"`
}

type ListSlotsRequestBody struct {
	Filters    []shared.SlotFilter         `json:"filters,omitempty"`
	MaxResults *int64                      `json:"maxResults,omitempty"`
	NextToken  *string                     `json:"nextToken,omitempty"`
	SortBy     *ListSlotsRequestBodySortBy `json:"sortBy,omitempty"`
}

type ListSlotsRequest struct {
	PathParams  ListSlotsPathParams
	QueryParams ListSlotsQueryParams
	Headers     ListSlotsHeaders
	Request     ListSlotsRequestBody `request:"mediaType=application/json"`
}

type ListSlotsResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	ListSlotsResponse             *shared.ListSlotsResponse
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
