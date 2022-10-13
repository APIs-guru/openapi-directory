package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminCreatePreReceiveEnvironmentRequestBody struct {
	ImageURL string `json:"image_url"`
	Name     string `json:"name"`
}

type EnterpriseAdminCreatePreReceiveEnvironmentRequest struct {
	Request *EnterpriseAdminCreatePreReceiveEnvironmentRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminCreatePreReceiveEnvironmentResponse struct {
	ContentType           string
	StatusCode            int64
	PreReceiveEnvironment *shared.PreReceiveEnvironment
}
