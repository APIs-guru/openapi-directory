package operations

import (
	"openapi/pkg/models/shared"
)

type ListChangeSetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListChangeSetsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// ListChangeSetsRequestBodySort
// An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
type ListChangeSetsRequestBodySort struct {
	SortBy    *string               `json:"SortBy,omitempty"`
	SortOrder *shared.SortOrderEnum `json:"SortOrder,omitempty"`
}

type ListChangeSetsRequestBody struct {
	Catalog    string                         `json:"Catalog"`
	FilterList []shared.Filter                `json:"FilterList,omitempty"`
	MaxResults *int64                         `json:"MaxResults,omitempty"`
	NextToken  *string                        `json:"NextToken,omitempty"`
	Sort       *ListChangeSetsRequestBodySort `json:"Sort,omitempty"`
}

type ListChangeSetsRequest struct {
	QueryParams ListChangeSetsQueryParams
	Headers     ListChangeSetsHeaders
	Request     ListChangeSetsRequestBody `request:"mediaType=application/json"`
}

type ListChangeSetsResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	InternalServiceException *interface{}
	ListChangeSetsResponse   *shared.ListChangeSetsResponse
	StatusCode               int64
	ThrottlingException      *interface{}
	ValidationException      *interface{}
}
