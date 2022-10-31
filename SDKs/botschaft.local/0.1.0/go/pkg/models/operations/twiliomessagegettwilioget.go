package operations

import (
	"openapi/pkg/models/shared"
)

type TwilioMessageGetTwilioGetQueryParams struct {
	Base64Message *string `queryParam:"style=form,explode=true,name=base64_message"`
	Message       *string `queryParam:"style=form,explode=true,name=message"`
	To            string  `queryParam:"style=form,explode=true,name=to"`
}

type TwilioMessageGetTwilioGetHeaders struct {
	Authorization *string `header:"style=simple,explode=false,name=authorization"`
}

type TwilioMessageGetTwilioGetRequest struct {
	QueryParams TwilioMessageGetTwilioGetQueryParams
	Headers     TwilioMessageGetTwilioGetHeaders
}

type TwilioMessageGetTwilioGetResponse struct {
	ContentType                                    string
	HTTPValidationError                            *shared.HTTPValidationError
	StatusCode                                     int64
	TwilioMessageGetTwilioGet200ApplicationJSONAny *interface{}
}
