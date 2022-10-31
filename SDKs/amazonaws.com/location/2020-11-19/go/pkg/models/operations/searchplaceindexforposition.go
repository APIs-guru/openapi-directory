package operations

import (
	"openapi/pkg/models/shared"
)

type SearchPlaceIndexForPositionPathParams struct {
	IndexName string `pathParam:"style=simple,explode=false,name=IndexName"`
}

type SearchPlaceIndexForPositionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type SearchPlaceIndexForPositionRequestBody struct {
	MaxResults *int64    `json:"MaxResults,omitempty"`
	Position   []float64 `json:"Position"`
}

type SearchPlaceIndexForPositionRequest struct {
	PathParams SearchPlaceIndexForPositionPathParams
	Headers    SearchPlaceIndexForPositionHeaders
	Request    SearchPlaceIndexForPositionRequestBody `request:"mediaType=application/json"`
}

type SearchPlaceIndexForPositionResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	InternalServerException             *interface{}
	ResourceNotFoundException           *interface{}
	SearchPlaceIndexForPositionResponse *shared.SearchPlaceIndexForPositionResponse
	StatusCode                          int64
	ThrottlingException                 *interface{}
	ValidationException                 *interface{}
}
