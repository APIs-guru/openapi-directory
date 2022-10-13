package operations

type AllEnvironments200ApplicationJSONEnvironments struct {
	ID    *string `json:"id"`
	Name  *string `json:"name"`
	Owner *string `json:"owner"`
	UID   *string `json:"uid"`
}

type AllEnvironments200ApplicationJSON struct {
	Environments []AllEnvironments200ApplicationJSONEnvironments `json:"environments"`
}

type AllEnvironmentsResponse struct {
	ContentType                             string
	StatusCode                              int64
	AllEnvironments200ApplicationJSONObject *AllEnvironments200ApplicationJSON
}
