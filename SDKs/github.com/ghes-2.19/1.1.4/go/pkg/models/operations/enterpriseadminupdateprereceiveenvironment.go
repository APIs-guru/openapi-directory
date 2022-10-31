package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminUpdatePreReceiveEnvironmentPathParams struct {
	PreReceiveEnvironmentID int64 `pathParam:"style=simple,explode=false,name=pre_receive_environment_id"`
}

type EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody struct {
	ImageURL *string `json:"image_url,omitempty"`
	Name     *string `json:"name,omitempty"`
}

type EnterpriseAdminUpdatePreReceiveEnvironmentRequest struct {
	PathParams EnterpriseAdminUpdatePreReceiveEnvironmentPathParams
	Request    *EnterpriseAdminUpdatePreReceiveEnvironmentRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors struct {
	Code     *string `json:"code,omitempty"`
	Message  *string `json:"message,omitempty"`
	Resource *string `json:"resource,omitempty"`
}

type EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON struct {
	Errors  []EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONErrors `json:"errors,omitempty"`
	Message *string                                                              `json:"message,omitempty"`
}

type EnterpriseAdminUpdatePreReceiveEnvironmentResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSONObject *EnterpriseAdminUpdatePreReceiveEnvironment422ApplicationJSON
	PreReceiveEnvironment                                              *shared.PreReceiveEnvironment
}
