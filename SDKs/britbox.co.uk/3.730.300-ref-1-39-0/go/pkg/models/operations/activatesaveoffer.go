package operations

import (
	"openapi/pkg/models/shared"
)

type ActivateSaveOfferQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type ActivateSaveOfferSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type ActivateSaveOfferRequest struct {
	QueryParams ActivateSaveOfferQueryParams
	Request     string `request:"mediaType=application/json"`
	Security    ActivateSaveOfferSecurity
}

type ActivateSaveOfferResponse struct {
	ContentType string
	StatusCode  int64
}
