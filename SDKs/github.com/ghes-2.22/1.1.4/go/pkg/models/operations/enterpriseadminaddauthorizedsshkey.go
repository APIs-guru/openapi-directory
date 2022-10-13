package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminAddAuthorizedSSHKeyRequestBody struct {
	AuthorizedKey string `json:"authorized_key"`
}

type EnterpriseAdminAddAuthorizedSSHKeyRequest struct {
	Request *EnterpriseAdminAddAuthorizedSSHKeyRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminAddAuthorizedSSHKeyResponse struct {
	ContentType string
	StatusCode  int64
	SSHKeys     []shared.SSHKey
}
