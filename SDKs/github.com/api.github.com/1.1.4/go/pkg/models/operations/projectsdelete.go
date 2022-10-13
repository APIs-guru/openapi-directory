package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsDeletePathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type ProjectsDeleteRequest struct {
	PathParams ProjectsDeletePathParams
}

type ProjectsDelete403ApplicationJSON struct {
	DocumentationURL *string  `json:"documentation_url"`
	Errors           []string `json:"errors"`
	Message          *string  `json:"message"`
}

type ProjectsDeleteResponse struct {
	ContentType                            string
	StatusCode                             int64
	BasicError                             *shared.BasicError
	ProjectsDelete403ApplicationJSONObject *ProjectsDelete403ApplicationJSON
}
