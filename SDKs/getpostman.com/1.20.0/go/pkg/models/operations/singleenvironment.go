package operations

type SingleEnvironmentPathParams struct {
	EnvironmentUID string `pathParam:"style=simple,explode=false,name=environment_uid"`
}

type SingleEnvironmentRequest struct {
	PathParams SingleEnvironmentPathParams
}

type SingleEnvironment200ApplicationJSONEnvironmentValues struct {
	Enabled *bool   `json:"enabled"`
	Hovered *bool   `json:"hovered"`
	Key     *string `json:"key"`
	Type    *string `json:"type"`
	Value   *string `json:"value"`
}

type SingleEnvironment200ApplicationJSONEnvironment struct {
	ID     *string                                                `json:"id"`
	Name   *string                                                `json:"name"`
	Values []SingleEnvironment200ApplicationJSONEnvironmentValues `json:"values"`
}

type SingleEnvironment200ApplicationJSON struct {
	Environment *SingleEnvironment200ApplicationJSONEnvironment `json:"environment"`
}

type SingleEnvironmentResponse struct {
	ContentType                               string
	StatusCode                                int64
	SingleEnvironment200ApplicationJSONObject *SingleEnvironment200ApplicationJSON
}
