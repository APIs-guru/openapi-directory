package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOrganizationExportQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateOrganizationExportRequestBody struct {
	Data *shared.OrganizationExportRequest `json:"data,omitempty"`
}

type CreateOrganizationExport201ApplicationJSON struct {
	Data *shared.OrganizationExportResponse `json:"data,omitempty"`
}

type CreateOrganizationExportRequest struct {
	QueryParams CreateOrganizationExportQueryParams
	Request     CreateOrganizationExportRequestBody `request:"mediaType=application/json"`
}

type CreateOrganizationExportResponse struct {
	ContentType                                      string
	ErrorResponse                                    *shared.ErrorResponse
	StatusCode                                       int64
	CreateOrganizationExport201ApplicationJSONObject *CreateOrganizationExport201ApplicationJSON
}
