package operations

type DeleteEnvironmentPathParams struct {
	EnvironmentUID string `pathParam:"style=simple,explode=false,name=environment_uid"`
}

type DeleteEnvironment200ApplicationJSONEnvironment struct {
	ID  *string `json:"id,omitempty"`
	UID *string `json:"uid,omitempty"`
}

type DeleteEnvironment200ApplicationJSON struct {
	Environment *DeleteEnvironment200ApplicationJSONEnvironment `json:"environment,omitempty"`
}

type DeleteEnvironment404ApplicationJSONError struct {
	Message *string `json:"message,omitempty"`
	Name    *string `json:"name,omitempty"`
}

type DeleteEnvironment404ApplicationJSON struct {
	Error *DeleteEnvironment404ApplicationJSONError `json:"error,omitempty"`
}

type DeleteEnvironmentRequest struct {
	PathParams DeleteEnvironmentPathParams
}

type DeleteEnvironmentResponse struct {
	ContentType                               string
	StatusCode                                int64
	DeleteEnvironment200ApplicationJSONObject *DeleteEnvironment200ApplicationJSON
	DeleteEnvironment404ApplicationJSONObject *DeleteEnvironment404ApplicationJSON
}
