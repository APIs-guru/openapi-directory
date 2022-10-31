package operations

import (
	"openapi/pkg/models/shared"
)

type DiscordGetDiscordGetQueryParams struct {
	Base64Message *string `queryParam:"style=form,explode=true,name=base64_message"`
	Channel       string  `queryParam:"style=form,explode=true,name=channel"`
	Message       *string `queryParam:"style=form,explode=true,name=message"`
}

type DiscordGetDiscordGetHeaders struct {
	Authorization *string `header:"style=simple,explode=false,name=authorization"`
}

type DiscordGetDiscordGetRequest struct {
	QueryParams DiscordGetDiscordGetQueryParams
	Headers     DiscordGetDiscordGetHeaders
}

type DiscordGetDiscordGetResponse struct {
	ContentType                               string
	HTTPValidationError                       *shared.HTTPValidationError
	StatusCode                                int64
	DiscordGetDiscordGet200ApplicationJSONAny *interface{}
}
