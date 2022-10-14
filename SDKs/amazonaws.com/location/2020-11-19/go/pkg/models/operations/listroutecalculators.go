package operations

import (
	"openapi/pkg/models/shared"
)

type ListRouteCalculatorsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListRouteCalculatorsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListRouteCalculatorsRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}

type ListRouteCalculatorsRequest struct {
	QueryParams ListRouteCalculatorsQueryParams
	Headers     ListRouteCalculatorsHeaders
	Request     ListRouteCalculatorsRequestBody `request:"mediaType=application/json"`
}

type ListRouteCalculatorsResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	InternalServerException      *interface{}
	ListRouteCalculatorsResponse *shared.ListRouteCalculatorsResponse
	StatusCode                   int64
	ThrottlingException          *interface{}
	ValidationException          *interface{}
}
