package operations

type CreateEnvironmentRequestBodyEnvironmentValues struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type CreateEnvironmentRequestBodyEnvironment struct {
	Name   *string                                         `json:"name"`
	Values []CreateEnvironmentRequestBodyEnvironmentValues `json:"values"`
}

type CreateEnvironmentRequestBody struct {
	Environment *CreateEnvironmentRequestBodyEnvironment `json:"environment"`
}

type CreateEnvironmentRequest struct {
	Request *CreateEnvironmentRequestBody `request:"mediaType=application/json"`
}

type CreateEnvironment200ApplicationJSONEnvironment struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type CreateEnvironment200ApplicationJSON struct {
	Environment *CreateEnvironment200ApplicationJSONEnvironment `json:"environment"`
}

type CreateEnvironment400ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type CreateEnvironment400ApplicationJSON struct {
	Error *CreateEnvironment400ApplicationJSONError `json:"error"`
}

type CreateEnvironmentResponse struct {
	ContentType                               string
	StatusCode                                int64
	CreateEnvironment200ApplicationJSONObject *CreateEnvironment200ApplicationJSON
	CreateEnvironment400ApplicationJSONObject *CreateEnvironment400ApplicationJSON
}
