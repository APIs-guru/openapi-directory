package operations

type DeleteEnvironmentPathParams struct {
	EnvironmentUID string `pathParam:"style=simple,explode=false,name=environment_uid"`
}

type DeleteEnvironmentRequest struct {
	PathParams DeleteEnvironmentPathParams
}

type DeleteEnvironment200ApplicationJSONEnvironment struct {
	ID  *string `json:"id"`
	UID *string `json:"uid"`
}

type DeleteEnvironment200ApplicationJSON struct {
	Environment *DeleteEnvironment200ApplicationJSONEnvironment `json:"environment"`
}

type DeleteEnvironment404ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type DeleteEnvironment404ApplicationJSON struct {
	Error *DeleteEnvironment404ApplicationJSONError `json:"error"`
}

type DeleteEnvironmentResponse struct {
	ContentType                               string
	StatusCode                                int64
	DeleteEnvironment200ApplicationJSONObject *DeleteEnvironment200ApplicationJSON
	DeleteEnvironment404ApplicationJSONObject *DeleteEnvironment404ApplicationJSON
}
