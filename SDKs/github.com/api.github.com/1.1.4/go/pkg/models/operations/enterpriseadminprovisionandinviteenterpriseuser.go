package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails struct {
	Primary bool   `json:"primary"`
	Type    string `json:"type"`
	Value   string `json:"value"`
}

type EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups struct {
	Value *string `json:"value,omitempty"`
}

type EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName struct {
	FamilyName string `json:"familyName"`
	GivenName  string `json:"givenName"`
}

type EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody struct {
	Emails   []EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails `json:"emails"`
	Groups   []EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups `json:"groups,omitempty"`
	Name     EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName     `json:"name"`
	Schemas  []string                                                           `json:"schemas"`
	UserName string                                                             `json:"userName"`
}

type EnterpriseAdminProvisionAndInviteEnterpriseUserRequest struct {
	PathParams EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams
	Request    *EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminProvisionAndInviteEnterpriseUserResponse struct {
	ContentType        string
	StatusCode         int64
	ScimEnterpriseUser *shared.ScimEnterpriseUser
}
