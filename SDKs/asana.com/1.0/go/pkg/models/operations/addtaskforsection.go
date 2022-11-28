package operations

import (
	"openapi/pkg/models/shared"
)

type AddTaskForSectionPathParams struct {
	SectionGid string `pathParam:"style=simple,explode=false,name=section_gid"`
}

type AddTaskForSectionQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddTaskForSectionRequestBody struct {
	Data *shared.SectionTaskInsertRequest `json:"data,omitempty"`
}

type AddTaskForSection200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type AddTaskForSectionRequest struct {
	PathParams  AddTaskForSectionPathParams
	QueryParams AddTaskForSectionQueryParams
	Request     AddTaskForSectionRequestBody `request:"mediaType=application/json"`
}

type AddTaskForSectionResponse struct {
	ContentType                               string
	ErrorResponse                             *shared.ErrorResponse
	StatusCode                                int64
	AddTaskForSection200ApplicationJSONObject *AddTaskForSection200ApplicationJSON
}
