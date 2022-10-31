package operations

import (
	"openapi/pkg/models/shared"
)

type AccountDeleteIPBlacklistPathParams struct {
	BlacklistID string `pathParam:"style=simple,explode=false,name=blacklistId"`
}

type AccountDeleteIPBlacklistRequest struct {
	PathParams AccountDeleteIPBlacklistPathParams
}

type AccountDeleteIPBlacklistResponse struct {
	APICoreDtoAccountingIPBlacklistEntry *shared.APICoreDtoAccountingIPBlacklistEntry
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
}
