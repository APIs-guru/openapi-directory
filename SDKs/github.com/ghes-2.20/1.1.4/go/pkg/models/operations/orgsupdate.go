package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsUpdatePathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum string

const (
	OrgsUpdateRequestBodyDefaultRepositoryPermissionEnumRead  OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum = "read"
	OrgsUpdateRequestBodyDefaultRepositoryPermissionEnumWrite OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum = "write"
	OrgsUpdateRequestBodyDefaultRepositoryPermissionEnumAdmin OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum = "admin"
	OrgsUpdateRequestBodyDefaultRepositoryPermissionEnumNone  OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum = "none"
)

type OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum string

const (
	OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnumAll     OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum = "all"
	OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnumPrivate OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum = "private"
	OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnumNone    OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum = "none"
)

type OrgsUpdateRequestBody struct {
	BillingEmail                         *string                                                        `json:"billing_email,omitempty"`
	Blog                                 *string                                                        `json:"blog,omitempty"`
	Company                              *string                                                        `json:"company,omitempty"`
	DefaultRepositoryPermission          *OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum          `json:"default_repository_permission,omitempty"`
	Description                          *string                                                        `json:"description,omitempty"`
	Email                                *string                                                        `json:"email,omitempty"`
	HasOrganizationProjects              *bool                                                          `json:"has_organization_projects,omitempty"`
	HasRepositoryProjects                *bool                                                          `json:"has_repository_projects,omitempty"`
	Location                             *string                                                        `json:"location,omitempty"`
	MembersAllowedRepositoryCreationType *OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum `json:"members_allowed_repository_creation_type,omitempty"`
	MembersCanCreateInternalRepositories *bool                                                          `json:"members_can_create_internal_repositories,omitempty"`
	MembersCanCreatePrivateRepositories  *bool                                                          `json:"members_can_create_private_repositories,omitempty"`
	MembersCanCreatePublicRepositories   *bool                                                          `json:"members_can_create_public_repositories,omitempty"`
	MembersCanCreateRepositories         *bool                                                          `json:"members_can_create_repositories,omitempty"`
	Name                                 *string                                                        `json:"name,omitempty"`
	TwitterUsername                      *string                                                        `json:"twitter_username,omitempty"`
}

type OrgsUpdate415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type OrgsUpdateRequest struct {
	PathParams OrgsUpdatePathParams
	Request    *OrgsUpdateRequestBody `request:"mediaType=application/json"`
}

type OrgsUpdateResponse struct {
	ContentType                        string
	StatusCode                         int64
	BasicError                         *shared.BasicError
	OrganizationFull                   *shared.OrganizationFull
	OrgsUpdate415ApplicationJSONObject *OrgsUpdate415ApplicationJSON
	OrgsUpdate422ApplicationJSONOneOf  *interface{}
}
