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
	BillingEmail                         *string                                                        `json:"billing_email"`
	Blog                                 *string                                                        `json:"blog"`
	Company                              *string                                                        `json:"company"`
	DefaultRepositoryPermission          *OrgsUpdateRequestBodyDefaultRepositoryPermissionEnum          `json:"default_repository_permission"`
	Description                          *string                                                        `json:"description"`
	Email                                *string                                                        `json:"email"`
	HasOrganizationProjects              *bool                                                          `json:"has_organization_projects"`
	HasRepositoryProjects                *bool                                                          `json:"has_repository_projects"`
	Location                             *string                                                        `json:"location"`
	MembersAllowedRepositoryCreationType *OrgsUpdateRequestBodyMembersAllowedRepositoryCreationTypeEnum `json:"members_allowed_repository_creation_type"`
	MembersCanCreateInternalRepositories *bool                                                          `json:"members_can_create_internal_repositories"`
	MembersCanCreatePages                *bool                                                          `json:"members_can_create_pages"`
	MembersCanCreatePrivatePages         *bool                                                          `json:"members_can_create_private_pages"`
	MembersCanCreatePrivateRepositories  *bool                                                          `json:"members_can_create_private_repositories"`
	MembersCanCreatePublicPages          *bool                                                          `json:"members_can_create_public_pages"`
	MembersCanCreatePublicRepositories   *bool                                                          `json:"members_can_create_public_repositories"`
	MembersCanCreateRepositories         *bool                                                          `json:"members_can_create_repositories"`
	Name                                 *string                                                        `json:"name"`
	TwitterUsername                      *string                                                        `json:"twitter_username"`
}

type OrgsUpdateRequest struct {
	PathParams OrgsUpdatePathParams
	Request    *OrgsUpdateRequestBody `request:"mediaType=application/json"`
}

type OrgsUpdate415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type OrgsUpdateResponse struct {
	ContentType                        string
	StatusCode                         int64
	BasicError                         *shared.BasicError
	OrganizationFull                   *shared.OrganizationFull
	OrgsUpdate415ApplicationJSONObject *OrgsUpdate415ApplicationJSON
	OrgsUpdate422ApplicationJSONOneOf  *interface{}
}
