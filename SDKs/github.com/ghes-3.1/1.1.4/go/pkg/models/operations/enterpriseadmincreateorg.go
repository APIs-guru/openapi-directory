package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminCreateOrgRequestBody struct {
	Admin       string  `json:"admin"`
	Login       string  `json:"login"`
	ProfileName *string `json:"profile_name,omitempty"`
}

type EnterpriseAdminCreateOrgRequest struct {
	Request *EnterpriseAdminCreateOrgRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminCreateOrgResponse struct {
	ContentType        string
	StatusCode         int64
	OrganizationSimple *shared.OrganizationSimple
}
