package operations

import (
	"openapi/pkg/models/shared"
)

type InsertSectionForProjectPathParams struct {
	ProjectGid string `pathParam:"style=simple,explode=false,name=project_gid"`
}

type InsertSectionForProjectQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type InsertSectionForProjectRequestBody struct {
	Data *shared.ProjectSectionInsertRequest `json:"data,omitempty"`
}

type InsertSectionForProject200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type InsertSectionForProjectRequest struct {
	PathParams  InsertSectionForProjectPathParams
	QueryParams InsertSectionForProjectQueryParams
	Request     InsertSectionForProjectRequestBody `request:"mediaType=application/json"`
}

type InsertSectionForProjectResponse struct {
	ContentType                                     string
	ErrorResponse                                   *shared.ErrorResponse
	StatusCode                                      int64
	InsertSectionForProject200ApplicationJSONObject *InsertSectionForProject200ApplicationJSON
}
