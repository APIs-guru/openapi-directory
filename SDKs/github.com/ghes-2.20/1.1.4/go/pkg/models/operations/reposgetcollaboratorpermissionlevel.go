package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetCollaboratorPermissionLevelPathParams struct {
	Owner    string `pathParam:"style=simple,explode=false,name=owner"`
	Repo     string `pathParam:"style=simple,explode=false,name=repo"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type ReposGetCollaboratorPermissionLevelRequest struct {
	PathParams ReposGetCollaboratorPermissionLevelPathParams
}

type ReposGetCollaboratorPermissionLevelResponse struct {
	ContentType                      string
	StatusCode                       int64
	BasicError                       *shared.BasicError
	RepositoryCollaboratorPermission *shared.RepositoryCollaboratorPermission
}
