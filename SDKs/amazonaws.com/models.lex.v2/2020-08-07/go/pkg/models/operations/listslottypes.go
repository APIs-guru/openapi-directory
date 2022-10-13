package operations

import (
	"openapi/pkg/models/shared"
)

type ListSlotTypesPathParams struct {
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
}

type ListSlotTypesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListSlotTypesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListSlotTypesRequestBodySortBy struct {
	Attribute *shared.SlotTypeSortAttributeEnum `json:"attribute"`
	Order     *shared.SortOrderEnum             `json:"order"`
}

type ListSlotTypesRequestBody struct {
	Filters    []shared.SlotTypeFilter         `json:"filters"`
	MaxResults *int64                          `json:"maxResults"`
	NextToken  *string                         `json:"nextToken"`
	SortBy     *ListSlotTypesRequestBodySortBy `json:"sortBy"`
}

type ListSlotTypesRequest struct {
	PathParams  ListSlotTypesPathParams
	QueryParams ListSlotTypesQueryParams
	Headers     ListSlotTypesHeaders
	Request     ListSlotTypesRequestBody `request:"mediaType=application/json"`
}

type ListSlotTypesResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	ListSlotTypesResponse         *shared.ListSlotTypesResponse
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
