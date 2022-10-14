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
	DocumentationURL *string  `json:"documentation_url,omitempty"`
	Errors           []string `json:"errors,omitempty"`
	Message          *string  `json:"message,omitempty"`
}

type ProjectsDeleteResponse struct {
	ContentType                            string
	StatusCode                             int64
	BasicError                             *shared.BasicError
	ProjectsDelete403ApplicationJSONObject *ProjectsDelete403ApplicationJSON
}
