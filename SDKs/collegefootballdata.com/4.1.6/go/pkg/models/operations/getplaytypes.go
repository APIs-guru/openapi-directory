package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlayTypesResponse struct {
	ContentType string
	PlayTypes   []shared.PlayType
	StatusCode  int64
}
