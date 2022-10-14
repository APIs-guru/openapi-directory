package operations

import (
	"openapi/pkg/models/shared"
)

type ReposAddCollaboratorPathParams struct {
	Owner    string `pathParam:"style=simple,explode=false,name=owner"`
	Repo     string `pathParam:"style=simple,explode=false,name=repo"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type ReposAddCollaboratorRequestBodyPermissionEnum string

const (
	ReposAddCollaboratorRequestBodyPermissionEnumPull     ReposAddCollaboratorRequestBodyPermissionEnum = "pull"
	ReposAddCollaboratorRequestBodyPermissionEnumPush     ReposAddCollaboratorRequestBodyPermissionEnum = "push"
	ReposAddCollaboratorRequestBodyPermissionEnumAdmin    ReposAddCollaboratorRequestBodyPermissionEnum = "admin"
	ReposAddCollaboratorRequestBodyPermissionEnumMaintain ReposAddCollaboratorRequestBodyPermissionEnum = "maintain"
	ReposAddCollaboratorRequestBodyPermissionEnumTriage   ReposAddCollaboratorRequestBodyPermissionEnum = "triage"
)

type ReposAddCollaboratorRequestBody struct {
	Permission  *ReposAddCollaboratorRequestBodyPermissionEnum `json:"permission,omitempty"`
	Permissions *string                                        `json:"permissions,omitempty"`
}

type ReposAddCollaboratorRequest struct {
	PathParams ReposAddCollaboratorPathParams
	Request    *ReposAddCollaboratorRequestBody `request:"mediaType=application/json"`
}

type ReposAddCollaboratorResponse struct {
	ContentType          string
	StatusCode           int64
	BasicError           *shared.BasicError
	RepositoryInvitation *shared.RepositoryInvitation
	ValidationError      *shared.ValidationError
}
