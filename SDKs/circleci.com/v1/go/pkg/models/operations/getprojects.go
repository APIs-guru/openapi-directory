package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectsResponse struct {
	ContentType string
	Projects    []shared.Project
	StatusCode  int64
}
