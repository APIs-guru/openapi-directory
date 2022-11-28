package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsListAppInstallationsPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsListAppInstallationsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type OrgsListAppInstallations200ApplicationJSON struct {
	Installations []shared.Installation `json:"installations"`
	TotalCount    int64                 `json:"total_count"`
}

type OrgsListAppInstallationsRequest struct {
	PathParams  OrgsListAppInstallationsPathParams
	QueryParams OrgsListAppInstallationsQueryParams
}

type OrgsListAppInstallationsResponse struct {
	ContentType                                      string
	Headers                                          map[string][]string
	StatusCode                                       int64
	OrgsListAppInstallations200ApplicationJSONObject *OrgsListAppInstallations200ApplicationJSON
}
