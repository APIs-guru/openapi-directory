package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsUpdateCardPathParams struct {
	CardID int64 `pathParam:"style=simple,explode=false,name=card_id"`
}

type ProjectsUpdateCardRequestBody struct {
	Archived *bool   `json:"archived"`
	Note     *string `json:"note"`
}

type ProjectsUpdateCardRequest struct {
	PathParams ProjectsUpdateCardPathParams
	Request    *ProjectsUpdateCardRequestBody `request:"mediaType=application/json"`
}

type ProjectsUpdateCardResponse struct {
	ContentType           string
	StatusCode            int64
	BasicError            *shared.BasicError
	ProjectCard           *shared.ProjectCard
	ValidationErrorSimple *shared.ValidationErrorSimple
}
