package operations

import (
	"openapi/pkg/models/shared"
)

type ListBuiltInIntentsPathParams struct {
	LocaleID string `pathParam:"style=simple,explode=false,name=localeId"`
}

type ListBuiltInIntentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBuiltInIntentsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListBuiltInIntentsRequestBodySortBy struct {
	Attribute *shared.BuiltInIntentSortAttributeEnum `json:"attribute,omitempty"`
	Order     *shared.SortOrderEnum                  `json:"order,omitempty"`
}

type ListBuiltInIntentsRequestBody struct {
	MaxResults *int64                               `json:"maxResults,omitempty"`
	NextToken  *string                              `json:"nextToken,omitempty"`
	SortBy     *ListBuiltInIntentsRequestBodySortBy `json:"sortBy,omitempty"`
}

type ListBuiltInIntentsRequest struct {
	PathParams  ListBuiltInIntentsPathParams
	QueryParams ListBuiltInIntentsQueryParams
	Headers     ListBuiltInIntentsHeaders
	Request     ListBuiltInIntentsRequestBody `request:"mediaType=application/json"`
}

type ListBuiltInIntentsResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	ListBuiltInIntentsResponse    *shared.ListBuiltInIntentsResponse
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
