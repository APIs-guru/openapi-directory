package operations

import (
	"openapi/pkg/models/shared"
)

type DomainsGetTypeEnum string

const (
	DomainsGetTypeEnumSystem    DomainsGetTypeEnum = "system"
	DomainsGetTypeEnumGo        DomainsGetTypeEnum = "go"
	DomainsGetTypeEnumPersonal  DomainsGetTypeEnum = "personal"
	DomainsGetTypeEnumDedicated DomainsGetTypeEnum = "dedicated"
)

type DomainsGetQueryParams struct {
	Limit  *int32              `queryParam:"style=form,explode=true,name=limit"`
	Name   *string             `queryParam:"style=form,explode=true,name=name"`
	Offset *int32              `queryParam:"style=form,explode=true,name=offset"`
	Type   *DomainsGetTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type DomainsGetRequest struct {
	QueryParams DomainsGetQueryParams
}

type DomainsGetResponse struct {
	APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64
	ContentType                                                          string
	StatusCode                                                           int64
}
