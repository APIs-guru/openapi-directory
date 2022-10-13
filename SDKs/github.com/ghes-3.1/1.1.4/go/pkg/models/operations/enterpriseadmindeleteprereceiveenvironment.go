package operations

type EnterpriseAdminDeletePreReceiveEnvironmentPathParams struct {
	PreReceiveEnvironmentID int64 `pathParam:"style=simple,explode=false,name=pre_receive_environment_id"`
}

type EnterpriseAdminDeletePreReceiveEnvironmentRequest struct {
	PathParams EnterpriseAdminDeletePreReceiveEnvironmentPathParams
}

type EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONErrors struct {
	Code     *string `json:"code"`
	Message  *string `json:"message"`
	Resource *string `json:"resource"`
}

type EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON struct {
	Errors  []EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONErrors `json:"errors"`
	Message *string                                                              `json:"message"`
}

type EnterpriseAdminDeletePreReceiveEnvironmentResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSONObject *EnterpriseAdminDeletePreReceiveEnvironment422ApplicationJSON
}
