package operations

import (
	"openapi/pkg/models/shared"
)

type ListEntitiesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListEntitiesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// ListEntitiesRequestBodySort
// An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>.
type ListEntitiesRequestBodySort struct {
	SortBy    *string               `json:"SortBy,omitempty"`
	SortOrder *shared.SortOrderEnum `json:"SortOrder,omitempty"`
}

type ListEntitiesRequestBody struct {
	Catalog    string                       `json:"Catalog"`
	EntityType string                       `json:"EntityType"`
	FilterList []shared.Filter              `json:"FilterList,omitempty"`
	MaxResults *int64                       `json:"MaxResults,omitempty"`
	NextToken  *string                      `json:"NextToken,omitempty"`
	Sort       *ListEntitiesRequestBodySort `json:"Sort,omitempty"`
}

type ListEntitiesRequest struct {
	QueryParams ListEntitiesQueryParams
	Headers     ListEntitiesHeaders
	Request     ListEntitiesRequestBody `request:"mediaType=application/json"`
}

type ListEntitiesResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServiceException  *interface{}
	ListEntitiesResponse      *shared.ListEntitiesResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
