package shared

import (
	"time"
)

type OrganizationFullPlan struct {
	FilledSeats  *int64 `json:"filled_seats,omitempty"`
	Name         string `json:"name"`
	PrivateRepos int64  `json:"private_repos"`
	Seats        *int64 `json:"seats,omitempty"`
	Space        int64  `json:"space"`
}

type OrganizationFull struct {
	AvatarURL                            string                `json:"avatar_url"`
	BillingEmail                         *string               `json:"billing_email,omitempty"`
	Blog                                 *string               `json:"blog,omitempty"`
	Collaborators                        *int64                `json:"collaborators,omitempty"`
	Company                              *string               `json:"company,omitempty"`
	CreatedAt                            time.Time             `json:"created_at"`
	DefaultRepositoryPermission          *string               `json:"default_repository_permission,omitempty"`
	Description                          string                `json:"description"`
	DiskUsage                            *int64                `json:"disk_usage,omitempty"`
	Email                                *string               `json:"email,omitempty"`
	EventsURL                            string                `json:"events_url"`
	Followers                            int64                 `json:"followers"`
	Following                            int64                 `json:"following"`
	HasOrganizationProjects              bool                  `json:"has_organization_projects"`
	HasRepositoryProjects                bool                  `json:"has_repository_projects"`
	HooksURL                             string                `json:"hooks_url"`
	HTMLURL                              string                `json:"html_url"`
	ID                                   int64                 `json:"id"`
	IsVerified                           *bool                 `json:"is_verified,omitempty"`
	IssuesURL                            string                `json:"issues_url"`
	Location                             *string               `json:"location,omitempty"`
	Login                                string                `json:"login"`
	MembersAllowedRepositoryCreationType *string               `json:"members_allowed_repository_creation_type,omitempty"`
	MembersCanCreateInternalRepositories *bool                 `json:"members_can_create_internal_repositories,omitempty"`
	MembersCanCreatePages                *bool                 `json:"members_can_create_pages,omitempty"`
	MembersCanCreatePrivatePages         *bool                 `json:"members_can_create_private_pages,omitempty"`
	MembersCanCreatePrivateRepositories  *bool                 `json:"members_can_create_private_repositories,omitempty"`
	MembersCanCreatePublicPages          *bool                 `json:"members_can_create_public_pages,omitempty"`
	MembersCanCreatePublicRepositories   *bool                 `json:"members_can_create_public_repositories,omitempty"`
	MembersCanCreateRepositories         *bool                 `json:"members_can_create_repositories,omitempty"`
	MembersURL                           string                `json:"members_url"`
	Name                                 *string               `json:"name,omitempty"`
	NodeID                               string                `json:"node_id"`
	OwnedPrivateRepos                    *int64                `json:"owned_private_repos,omitempty"`
	Plan                                 *OrganizationFullPlan `json:"plan,omitempty"`
	PrivateGists                         *int64                `json:"private_gists,omitempty"`
	PublicGists                          int64                 `json:"public_gists"`
	PublicMembersURL                     string                `json:"public_members_url"`
	PublicRepos                          int64                 `json:"public_repos"`
	ReposURL                             string                `json:"repos_url"`
	TotalPrivateRepos                    *int64                `json:"total_private_repos,omitempty"`
	TwitterUsername                      *string               `json:"twitter_username,omitempty"`
	TwoFactorRequirementEnabled          *bool                 `json:"two_factor_requirement_enabled,omitempty"`
	Type                                 string                `json:"type"`
	UpdatedAt                            time.Time             `json:"updated_at"`
	URL                                  string                `json:"url"`
}
