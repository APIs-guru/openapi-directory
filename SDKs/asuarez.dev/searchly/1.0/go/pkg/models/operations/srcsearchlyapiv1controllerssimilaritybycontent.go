package operations

import (
	"openapi/pkg/models/shared"
)

type SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody struct {
	Content *string `json:"content,omitempty"`
}

type SrcSearchlyAPIV1ControllersSimilarityByContentRequest struct {
	Request SrcSearchlyAPIV1ControllersSimilarityByContentRequestBody `request:"mediaType=application/json"`
}

type SrcSearchlyAPIV1ControllersSimilarityByContentResponse struct {
	APIResponseSimilarity *shared.APIResponseSimilarity
	Body                  []byte
	ContentType           string
	StatusCode            int64
}
