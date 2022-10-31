package operations

import (
	"openapi/pkg/models/shared"
)

type AccountPostGuestPathParams struct {
	GuestID int64 `pathParam:"style=simple,explode=false,name=guestId"`
}

type AccountPostGuestRequests struct {
	APICoreDtoAccountingGuest  *shared.APICoreDtoAccountingGuest `request:"mediaType=application/json"`
	APICoreDtoAccountingGuest1 *shared.APICoreDtoAccountingGuest `request:"mediaType=application/x-www-form-urlencoded"`
	APICoreDtoAccountingGuest2 *shared.APICoreDtoAccountingGuest `request:"mediaType=text/json"`
	ApplicationXML             []byte                            `request:"mediaType=application/xml"`
	TextXML                    []byte                            `request:"mediaType=text/xml"`
}

type AccountPostGuestRequest struct {
	PathParams AccountPostGuestPathParams
	Request    AccountPostGuestRequests
}

type AccountPostGuestResponse struct {
	APICoreDtoAccountingGuest *shared.APICoreDtoAccountingGuest
	Body                      []byte
	ContentType               string
	StatusCode                int64
}
