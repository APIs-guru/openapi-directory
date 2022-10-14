package operations

import (
	"openapi/pkg/models/shared"
)

type ListPlaceIndexesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPlaceIndexesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListPlaceIndexesRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}

type ListPlaceIndexesRequest struct {
	QueryParams ListPlaceIndexesQueryParams
	Headers     ListPlaceIndexesHeaders
	Request     ListPlaceIndexesRequestBody `request:"mediaType=application/json"`
}

type ListPlaceIndexesResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	InternalServerException  *interface{}
	ListPlaceIndexesResponse *shared.ListPlaceIndexesResponse
	StatusCode               int64
	ThrottlingException      *interface{}
	ValidationException      *interface{}
}
