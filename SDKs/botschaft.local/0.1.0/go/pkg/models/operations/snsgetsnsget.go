package operations

import (
	"openapi/pkg/models/shared"
)

type SnsGetSnsGetQueryParams struct {
	Base64Message *string `queryParam:"style=form,explode=true,name=base64_message"`
	Message       *string `queryParam:"style=form,explode=true,name=message"`
}

type SnsGetSnsGetHeaders struct {
	Authorization *string `header:"name=authorization"`
}

type SnsGetSnsGetRequest struct {
	QueryParams SnsGetSnsGetQueryParams
	Headers     SnsGetSnsGetHeaders
}

type SnsGetSnsGetResponse struct {
	ContentType                       string
	HTTPValidationError               *shared.HTTPValidationError
	StatusCode                        int64
	SnsGetSnsGet200ApplicationJSONAny *interface{}
}
