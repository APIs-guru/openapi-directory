package operations

type DeleteProjectUsernameProjectEnvvarNamePathParams struct {
	Name     string `pathParam:"style=simple,explode=false,name=name"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type DeleteProjectUsernameProjectEnvvarNameRequest struct {
	PathParams DeleteProjectUsernameProjectEnvvarNamePathParams
}

type DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnum string

const (
	DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnumOk DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnum = "OK"
)

type DeleteProjectUsernameProjectEnvvarName200ApplicationJSON struct {
	Message *DeleteProjectUsernameProjectEnvvarName200ApplicationJSONMessageEnum `json:"message"`
}

type DeleteProjectUsernameProjectEnvvarNameResponse struct {
	ContentType                                                    string
	DeleteProjectUsernameProjectEnvvarName200ApplicationJSONObject *DeleteProjectUsernameProjectEnvvarName200ApplicationJSON
	StatusCode                                                     int64
}
