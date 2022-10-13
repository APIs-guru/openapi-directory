package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainsTldZoneIDSearchPathParams struct {
	ZoneID string `pathParam:"style=simple,explode=false,name=zone_id"`
}

type GetDomainsTldZoneIDSearchQueryParams struct {
	A       *string `queryParam:"style=form,explode=true,name=A"`
	Cname   *string `queryParam:"style=form,explode=true,name=CNAME"`
	Mx      *string `queryParam:"style=form,explode=true,name=MX"`
	Ns      *string `queryParam:"style=form,explode=true,name=NS"`
	Txt     *string `queryParam:"style=form,explode=true,name=TXT"`
	APIKey  *string `queryParam:"style=form,explode=true,name=api_key"`
	Country *string `queryParam:"style=form,explode=true,name=country"`
	Date    *string `queryParam:"style=form,explode=true,name=date"`
	Domain  *string `queryParam:"style=form,explode=true,name=domain"`
	IsDead  *bool   `queryParam:"style=form,explode=true,name=isDead"`
	Limit   *int64  `queryParam:"style=form,explode=true,name=limit"`
	Page    *string `queryParam:"style=form,explode=true,name=page"`
}

type GetDomainsTldZoneIDSearchRequest struct {
	PathParams  GetDomainsTldZoneIDSearchPathParams
	QueryParams GetDomainsTldZoneIDSearchQueryParams
}

type GetDomainsTldZoneIDSearchResponse struct {
	ContentType   string
	SearchResults *shared.SearchResults
	StatusCode    int64
}
