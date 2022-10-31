package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminRemoveAuthorizedSSHKeyRequestBody struct {
	AuthorizedKey string `json:"authorized_key"`
}

type EnterpriseAdminRemoveAuthorizedSSHKeyRequest struct {
	Request *EnterpriseAdminRemoveAuthorizedSSHKeyRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminRemoveAuthorizedSSHKeyResponse struct {
	ContentType string
	StatusCode  int64
	SSHKeys     []shared.SSHKey
}
