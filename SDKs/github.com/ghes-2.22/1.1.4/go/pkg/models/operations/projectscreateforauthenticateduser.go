package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsCreateForAuthenticatedUserRequestBody struct {
	Body *string `json:"body,omitempty"`
	Name string  `json:"name"`
}

type ProjectsCreateForAuthenticatedUser415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ProjectsCreateForAuthenticatedUserRequest struct {
	Request *ProjectsCreateForAuthenticatedUserRequestBody `request:"mediaType=application/json"`
}

type ProjectsCreateForAuthenticatedUserResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	BasicError                                                 *shared.BasicError
	Project                                                    *shared.Project
	ProjectsCreateForAuthenticatedUser415ApplicationJSONObject *ProjectsCreateForAuthenticatedUser415ApplicationJSON
	ValidationErrorSimple                                      *shared.ValidationErrorSimple
}
