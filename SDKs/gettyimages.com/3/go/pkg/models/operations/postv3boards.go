package operations

import (
	"openapi/pkg/models/shared"
)

type PostV3BoardsRequest struct {
	Request *shared.BoardInfo `request:"mediaType=application/json"`
}

type PostV3BoardsResponse struct {
	BoardCreated *shared.BoardCreated
	ContentType  string
	StatusCode   int64
}
