package operations

type EnterpriseAdminDeletePreReceiveEnvironmentPathParams struct {
	PreReceiveEnvironmentID int64 `pathParam:"style=simple,explode=false,name=pre_receive_environment_id"`
}

type EnterpriseAdminDeletePreReceiveEnvironmentRequest struct {
	PathParams EnterpriseAdminDeletePreReceiveEnvironmentPathParams
}

type EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONErrors struct {
	Code     *string `json:"code,omitempty"`
	Message  *string `json:"message,omitempty"`
	Resource *string `json:"resource,omitempty"`
}

type EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON struct {
	Errors  []EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONErrors `json:"errors,omitempty"`
	Message *string                                                              `json:"message,omitempty"`
}

type EnterpriseAdminDeletePreReceiveEnvironmentResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONObject *EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON
}
