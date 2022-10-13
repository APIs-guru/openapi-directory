package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrganizationExportPathParams struct {
	OrganizationExportGid string `pathParam:"style=simple,explode=false,name=organization_export_gid"`
}

type GetOrganizationExportQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetOrganizationExportRequest struct {
	PathParams  GetOrganizationExportPathParams
	QueryParams GetOrganizationExportQueryParams
}

type GetOrganizationExport200ApplicationJSON struct {
	Data *shared.OrganizationExportResponse `json:"data"`
}

type GetOrganizationExportResponse struct {
	ContentType                                   string
	ErrorResponse                                 *shared.ErrorResponse
	StatusCode                                    int64
	GetOrganizationExport200ApplicationJSONObject *GetOrganizationExport200ApplicationJSON
}
