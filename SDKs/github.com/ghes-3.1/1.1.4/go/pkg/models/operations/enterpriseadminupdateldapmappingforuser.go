package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminUpdateLdapMappingForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type EnterpriseAdminUpdateLdapMappingForUserRequestBody struct {
	LdapDn *string `json:"ldap_dn,omitempty"`
}

type EnterpriseAdminUpdateLdapMappingForUserRequest struct {
	PathParams EnterpriseAdminUpdateLdapMappingForUserPathParams
	Request    *EnterpriseAdminUpdateLdapMappingForUserRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminUpdateLdapMappingForUserResponse struct {
	ContentType     string
	StatusCode      int64
	LdapMappingUser *shared.LdapMappingUser
}
