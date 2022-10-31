package operations

import (
	"openapi/pkg/models/shared"
)

type DecodeViaEpiPathParams struct {
	Vin string `pathParam:"style=simple,explode=false,name=vin"`
}

type DecodeViaEpiQueryParams struct {
	APIKey *string `queryParam:"style=form,explode=true,name=api_key"`
}

type DecodeViaEpiRequest struct {
	PathParams  DecodeViaEpiPathParams
	QueryParams DecodeViaEpiQueryParams
}

type DecodeViaEpiResponse struct {
	Build       *shared.Build
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
