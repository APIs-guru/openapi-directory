package operations

import (
	"openapi/pkg/models/shared"
)

type GetSectionPathParams struct {
	SectionGid string `pathParam:"style=simple,explode=false,name=section_gid"`
}

type GetSectionQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetSectionRequest struct {
	PathParams  GetSectionPathParams
	QueryParams GetSectionQueryParams
}

type GetSection200ApplicationJSON struct {
	Data *shared.SectionResponse `json:"data"`
}

type GetSectionResponse struct {
	ContentType                        string
	ErrorResponse                      *shared.ErrorResponse
	StatusCode                         int64
	GetSection200ApplicationJSONObject *GetSection200ApplicationJSON
}
