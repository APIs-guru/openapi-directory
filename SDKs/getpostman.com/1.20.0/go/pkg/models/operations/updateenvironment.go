package operations

type UpdateEnvironmentPathParams struct {
	EnvironmentUID string `pathParam:"style=simple,explode=false,name=environment_uid"`
}

type UpdateEnvironmentRequestBodyEnvironmentValues struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type UpdateEnvironmentRequestBodyEnvironment struct {
	Name   *string                                         `json:"name"`
	Values []UpdateEnvironmentRequestBodyEnvironmentValues `json:"values"`
}

type UpdateEnvironmentRequestBody struct {
	Environment *UpdateEnvironmentRequestBodyEnvironment `json:"environment"`
}

type UpdateEnvironmentRequest struct {
	PathParams UpdateEnvironmentPathParams
	Request    *UpdateEnvironmentRequestBody `request:"mediaType=application/json"`
}

type UpdateEnvironment200ApplicationJSONEnvironment struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type UpdateEnvironment200ApplicationJSON struct {
	Environment *UpdateEnvironment200ApplicationJSONEnvironment `json:"environment"`
}

type UpdateEnvironment400ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type UpdateEnvironment400ApplicationJSON struct {
	Error *UpdateEnvironment400ApplicationJSONError `json:"error"`
}

type UpdateEnvironmentResponse struct {
	ContentType                               string
	StatusCode                                int64
	UpdateEnvironment200ApplicationJSONObject *UpdateEnvironment200ApplicationJSON
	UpdateEnvironment400ApplicationJSONObject *UpdateEnvironment400ApplicationJSON
}
