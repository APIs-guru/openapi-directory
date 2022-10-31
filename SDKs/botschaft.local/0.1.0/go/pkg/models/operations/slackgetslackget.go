package operations

import (
	"openapi/pkg/models/shared"
)

type SlackGetSlackGetQueryParams struct {
	Base64Message *string `queryParam:"style=form,explode=true,name=base64_message"`
	Channel       string  `queryParam:"style=form,explode=true,name=channel"`
	Message       *string `queryParam:"style=form,explode=true,name=message"`
}

type SlackGetSlackGetHeaders struct {
	Authorization *string `header:"style=simple,explode=false,name=authorization"`
}

type SlackGetSlackGetRequest struct {
	QueryParams SlackGetSlackGetQueryParams
	Headers     SlackGetSlackGetHeaders
}

type SlackGetSlackGetResponse struct {
	ContentType                           string
	HTTPValidationError                   *shared.HTTPValidationError
	StatusCode                            int64
	SlackGetSlackGet200ApplicationJSONAny *interface{}
}
