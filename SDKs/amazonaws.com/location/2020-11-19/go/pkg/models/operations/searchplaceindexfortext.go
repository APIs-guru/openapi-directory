package operations

import (
	"openapi/pkg/models/shared"
)

type SearchPlaceIndexForTextPathParams struct {
	IndexName string `pathParam:"style=simple,explode=false,name=IndexName"`
}

type SearchPlaceIndexForTextHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type SearchPlaceIndexForTextRequestBody struct {
	BiasPosition    []float64 `json:"BiasPosition,omitempty"`
	FilterBBox      []float64 `json:"FilterBBox,omitempty"`
	FilterCountries []string  `json:"FilterCountries,omitempty"`
	MaxResults      *int64    `json:"MaxResults,omitempty"`
	Text            string    `json:"Text"`
}

type SearchPlaceIndexForTextRequest struct {
	PathParams SearchPlaceIndexForTextPathParams
	Headers    SearchPlaceIndexForTextHeaders
	Request    SearchPlaceIndexForTextRequestBody `request:"mediaType=application/json"`
}

type SearchPlaceIndexForTextResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	ResourceNotFoundException       *interface{}
	SearchPlaceIndexForTextResponse *shared.SearchPlaceIndexForTextResponse
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
