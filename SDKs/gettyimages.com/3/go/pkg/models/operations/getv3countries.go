package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3CountriesHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type GetV3CountriesRequest struct {
	Headers GetV3CountriesHeaders
}

type GetV3CountriesResponse struct {
	ContentType   string
	CountriesList *shared.CountriesList
	StatusCode    int64
}
