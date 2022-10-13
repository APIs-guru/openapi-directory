package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListPreReceiveHooksForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type EnterpriseAdminListPreReceiveHooksForRepoSortEnum string

const (
	EnterpriseAdminListPreReceiveHooksForRepoSortEnumCreated EnterpriseAdminListPreReceiveHooksForRepoSortEnum = "created"
	EnterpriseAdminListPreReceiveHooksForRepoSortEnumUpdated EnterpriseAdminListPreReceiveHooksForRepoSortEnum = "updated"
	EnterpriseAdminListPreReceiveHooksForRepoSortEnumName    EnterpriseAdminListPreReceiveHooksForRepoSortEnum = "name"
)

type EnterpriseAdminListPreReceiveHooksForRepoQueryParams struct {
	Direction *shared.DirectionEnum                              `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                                             `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                                             `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *EnterpriseAdminListPreReceiveHooksForRepoSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type EnterpriseAdminListPreReceiveHooksForRepoRequest struct {
	PathParams  EnterpriseAdminListPreReceiveHooksForRepoPathParams
	QueryParams EnterpriseAdminListPreReceiveHooksForRepoQueryParams
}

type EnterpriseAdminListPreReceiveHooksForRepoResponse struct {
	ContentType               string
	StatusCode                int64
	RepositoryPreReceiveHooks []shared.RepositoryPreReceiveHook
}
