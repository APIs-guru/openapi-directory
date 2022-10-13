package operations

import (
	"openapi/pkg/models/shared"
)

type AccountGetDomainWhitelistQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type AccountGetDomainWhitelistRequest struct {
	QueryParams AccountGetDomainWhitelistQueryParams
}

type AccountGetDomainWhitelistResponse struct {
	APICoreResponsesEntitiesResponseAPICoreDtoAccountingDomainWhitelistEntry *shared.APICoreResponsesEntitiesResponseAPICoreDtoAccountingDomainWhitelistEntry
	ContentType                                                              string
	StatusCode                                                               int64
}
