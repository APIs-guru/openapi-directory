package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrganizationMembersPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationMembersRequest struct {
	PathParams GetOrganizationMembersPathParams
}

type GetOrganizationMembersResponse struct {
	ContentType string
	StatusCode  int64
	UserModels  []shared.UserModel
}
