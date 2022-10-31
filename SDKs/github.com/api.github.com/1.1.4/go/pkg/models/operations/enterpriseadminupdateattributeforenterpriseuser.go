package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
	ScimUserID string `pathParam:"style=simple,explode=false,name=scim_user_id"`
}

type EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody struct {
	Operations []map[string]interface{} `json:"Operations"`
	Schemas    []string                 `json:"schemas"`
}

type EnterpriseAdminUpdateAttributeForEnterpriseUserRequest struct {
	PathParams EnterpriseAdminUpdateAttributeForEnterpriseUserPathParams
	Request    *EnterpriseAdminUpdateAttributeForEnterpriseUserRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminUpdateAttributeForEnterpriseUserResponse struct {
	ContentType        string
	StatusCode         int64
	ScimEnterpriseUser *shared.ScimEnterpriseUser
}
