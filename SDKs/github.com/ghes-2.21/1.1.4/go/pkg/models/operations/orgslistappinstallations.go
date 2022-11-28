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

type OrgsListAppInstallationsHeaders struct {
	Accept string `header:"style=simple,explode=false,name=accept"`
}

type OrgsListAppInstallations200ApplicationJSON struct {
	Installations []shared.InstallationGhes2 `json:"installations"`
	TotalCount    int64                      `json:"total_count"`
}

type OrgsListAppInstallationsRequest struct {
	PathParams  OrgsListAppInstallationsPathParams
	QueryParams OrgsListAppInstallationsQueryParams
	Headers     OrgsListAppInstallationsHeaders
}

type OrgsListAppInstallationsResponse struct {
	ContentType                                      string
	Headers                                          map[string][]string
	StatusCode                                       int64
	OrgsListAppInstallations200ApplicationJSONObject *OrgsListAppInstallations200ApplicationJSON
}
