package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecentSearchesSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetRecentSearchesRequest struct {
	Security GetRecentSearchesSecurity
}

type GetRecentSearchesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
