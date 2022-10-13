package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminCreateUserRequestBody struct {
	Email *string `json:"email"`
	Login string  `json:"login"`
}

type EnterpriseAdminCreateUserRequest struct {
	Request *EnterpriseAdminCreateUserRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminCreateUserResponse struct {
	ContentType string
	StatusCode  int64
	SimpleUser  *shared.SimpleUser
}
