package operations

import (
	"openapi/pkg/models/shared"
)

type AccountDeleteGuestPathParams struct {
	GuestID int64 `pathParam:"style=simple,explode=false,name=guestId"`
}

type AccountDeleteGuestRequest struct {
	PathParams AccountDeleteGuestPathParams
}

type AccountDeleteGuestResponse struct {
	APICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntityURISystemInt64
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}
