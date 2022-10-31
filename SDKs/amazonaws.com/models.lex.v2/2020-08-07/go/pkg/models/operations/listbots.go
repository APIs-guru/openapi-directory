package operations

import (
	"openapi/pkg/models/shared"
)

type ListBotsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBotsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListBotsRequestBodySortBy struct {
	Attribute *shared.BotSortAttributeEnum `json:"attribute,omitempty"`
	Order     *shared.SortOrderEnum        `json:"order,omitempty"`
}

type ListBotsRequestBody struct {
	Filters    []shared.BotFilter         `json:"filters,omitempty"`
	MaxResults *int64                     `json:"maxResults,omitempty"`
	NextToken  *string                    `json:"nextToken,omitempty"`
	SortBy     *ListBotsRequestBodySortBy `json:"sortBy,omitempty"`
}

type ListBotsRequest struct {
	QueryParams ListBotsQueryParams
	Headers     ListBotsHeaders
	Request     ListBotsRequestBody `request:"mediaType=application/json"`
}

type ListBotsResponse struct {
	ContentType                   string
	InternalServerException       *interface{}
	ListBotsResponse              *shared.ListBotsResponse
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
