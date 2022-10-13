package operations

import (
	"openapi/pkg/models/shared"
)

type TariffSlph0QueryParams struct {
	Zipcode *string `queryParam:"style=form,explode=true,name=zipcode"`
}

type TariffSlph0Request struct {
	QueryParams TariffSlph0QueryParams
}

type TariffSlph0Response struct {
	ContentType string
	StatusCode  int64
	Tariffh0s   []shared.Tariffh0
}
