package operations

import (
	"openapi/pkg/models/shared"
)

type MigrationsMapCommitAuthorPathParams struct {
	AuthorID int64  `pathParam:"style=simple,explode=false,name=author_id"`
	Owner    string `pathParam:"style=simple,explode=false,name=owner"`
	Repo     string `pathParam:"style=simple,explode=false,name=repo"`
}

type MigrationsMapCommitAuthorRequestBody struct {
	Email    *string `json:"email,omitempty"`
	Name     *string `json:"name,omitempty"`
	RemoteID *string `json:"remote_id,omitempty"`
}

type MigrationsMapCommitAuthorRequest struct {
	PathParams MigrationsMapCommitAuthorPathParams
	Request    *MigrationsMapCommitAuthorRequestBody `request:"mediaType=application/json"`
}

type MigrationsMapCommitAuthorResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	PorterAuthor    *shared.PorterAuthor
	ValidationError *shared.ValidationError
}
