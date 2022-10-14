package operations

import (
	"openapi/pkg/models/shared"
)

type ListEntitiesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListEntitiesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

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
