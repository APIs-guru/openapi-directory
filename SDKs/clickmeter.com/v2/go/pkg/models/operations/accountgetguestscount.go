package operations

import (
	"openapi/pkg/models/shared"
)

type AccountGetGuestsCountQueryParams struct {
	TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
}

type AccountGetGuestsCountRequest struct {
	QueryParams AccountGetGuestsCountQueryParams
}

type AccountGetGuestsCountResponse struct {
	APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
}
