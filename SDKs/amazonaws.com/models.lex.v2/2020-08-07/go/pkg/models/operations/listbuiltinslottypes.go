package operations

import (
	"openapi/pkg/models/shared"
)

type ListBuiltInSlotTypesPathParams struct {
	LocaleID string `pathParam:"style=simple,explode=false,name=localeId"`
}

type ListBuiltInSlotTypesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBuiltInSlotTypesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// ListBuiltInSlotTypesRequestBodySortBy
// Specifies attributes for sorting a list of built-in slot types.
type ListBuiltInSlotTypesRequestBodySortBy struct {
	Attribute *shared.BuiltInSlotTypeSortAttributeEnum `json:"attribute,omitempty"`
	Order     *shared.SortOrderEnum                    `json:"order,omitempty"`
}

type ListBuiltInSlotTypesRequestBody struct {
	MaxResults *int64                                 `json:"maxResults,omitempty"`
	NextToken  *string                                `json:"nextToken,omitempty"`
	SortBy     *ListBuiltInSlotTypesRequestBodySortBy `json:"sortBy,omitempty"`
}

type ListBuiltInSlotTypesRequest struct {
	PathParams  ListBuiltInSlotTypesPathParams
	QueryParams ListBuiltInSlotTypesQueryParams
	Headers     ListBuiltInSlotTypesHeaders
	Request     ListBuiltInSlotTypesRequestBody `request:"mediaType=application/json"`
}

type ListBuiltInSlotTypesResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	ListBuiltInSlotTypesResponse  *shared.ListBuiltInSlotTypesResponse
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
