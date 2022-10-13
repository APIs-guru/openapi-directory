package operations

import (
	"openapi/pkg/models/shared"
)

type RequestUserKeyPairsHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type RequestUserKeyPairsRequest struct {
	Headers RequestUserKeyPairsHeaders
}

type RequestUserKeyPairsResponse struct {
	ContentType           string
	ErrorResponse         *shared.ErrorResponse
	StatusCode            int64
	UserKeyPairContainers []shared.UserKeyPairContainer
}
