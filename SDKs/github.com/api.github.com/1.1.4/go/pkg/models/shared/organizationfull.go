package shared

import (
	"time"
)

type OrganizationFullPlan struct {
	FilledSeats  *int64 `json:"filled_seats"`
	Name         string `json:"name"`
	PrivateRepos int64  `json:"private_repos"`
	Seats        *int64 `json:"seats"`
	Space        int64  `json:"space"`
}

type OrganizationFull struct {
	AvatarURL                            string                `json:"avatar_url"`
	BillingEmail                         *string               `json:"billing_email"`
	Blog                                 *string               `json:"blog"`
	Collaborators                        *int64                `json:"collaborators"`
	Company                              *string               `json:"company"`
	CreatedAt                            time.Time             `json:"created_at"`
	DefaultRepositoryPermission          *string               `json:"default_repository_permission"`
	Description                          string                `json:"description"`
	DiskUsage                            *int64                `json:"disk_usage"`
	Email                                *string               `json:"email"`
	EventsURL                            string                `json:"events_url"`
	Followers                            int64                 `json:"followers"`
	Following                            int64                 `json:"following"`
	HasOrganizationProjects              bool                  `json:"has_organization_projects"`
	HasRepositoryProjects                bool                  `json:"has_repository_projects"`
	HooksURL                             string                `json:"hooks_url"`
	HTMLURL                              string                `json:"html_url"`
	ID                                   int64                 `json:"id"`
	IsVerified                           *bool                 `json:"is_verified"`
	IssuesURL                            string                `json:"issues_url"`
	Location                             *string               `json:"location"`
	Login                                string                `json:"login"`
	MembersAllowedRepositoryCreationType *string               `json:"members_allowed_repository_creation_type"`
	MembersCanCreateInternalRepositories *bool                 `json:"members_can_create_internal_repositories"`
	MembersCanCreatePages                *bool                 `json:"members_can_create_pages"`
	MembersCanCreatePrivateRepositories  *bool                 `json:"members_can_create_private_repositories"`
	MembersCanCreatePublicRepositories   *bool                 `json:"members_can_create_public_repositories"`
	MembersCanCreateRepositories         *bool                 `json:"members_can_create_repositories"`
	MembersURL                           string                `json:"members_url"`
	Name                                 *string               `json:"name"`
	NodeID                               string                `json:"node_id"`
	OwnedPrivateRepos                    *int64                `json:"owned_private_repos"`
	Plan                                 *OrganizationFullPlan `json:"plan"`
	PrivateGists                         *int64                `json:"private_gists"`
	PublicGists                          int64                 `json:"public_gists"`
	PublicMembersURL                     string                `json:"public_members_url"`
	PublicRepos                          int64                 `json:"public_repos"`
	ReposURL                             string                `json:"repos_url"`
	TotalPrivateRepos                    *int64                `json:"total_private_repos"`
	TwitterUsername                      *string               `json:"twitter_username"`
	TwoFactorRequirementEnabled          *bool                 `json:"two_factor_requirement_enabled"`
	Type                                 string                `json:"type"`
	UpdatedAt                            time.Time             `json:"updated_at"`
	URL                                  string                `json:"url"`
}
