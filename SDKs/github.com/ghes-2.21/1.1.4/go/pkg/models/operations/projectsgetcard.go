package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsGetCardPathParams struct {
	CardID int64 `pathParam:"style=simple,explode=false,name=card_id"`
}

type ProjectsGetCardRequest struct {
	PathParams ProjectsGetCardPathParams
}

type ProjectsGetCardResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	ProjectCard *shared.ProjectCard
}
