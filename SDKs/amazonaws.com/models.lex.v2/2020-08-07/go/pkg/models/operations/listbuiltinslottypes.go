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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListBuiltInSlotTypesRequestBodySortBy struct {
	Attribute *shared.BuiltInSlotTypeSortAttributeEnum `json:"attribute"`
	Order     *shared.SortOrderEnum                    `json:"order"`
}

type ListBuiltInSlotTypesRequestBody struct {
	MaxResults *int64                                 `json:"maxResults"`
	NextToken  *string                                `json:"nextToken"`
	SortBy     *ListBuiltInSlotTypesRequestBodySortBy `json:"sortBy"`
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
