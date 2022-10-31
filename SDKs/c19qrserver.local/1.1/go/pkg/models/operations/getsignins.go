package operations

import (
	"openapi/pkg/models/shared"
)

type GetSigninsQueryParams struct {
	LessThan    *int64 `queryParam:"style=form,explode=true,name=less_than"`
	ReturnCount *int64 `queryParam:"style=form,explode=true,name=return_count"`
}

type GetSigninsRequest struct {
	QueryParams GetSigninsQueryParams
}

type GetSigninsResponse struct {
	ContentType  string
	StatusCode   int64
	InvalidToken *shared.InvalidToken
	KeyFailure   *shared.KeyFailure
	Signins      []shared.Signin
}
