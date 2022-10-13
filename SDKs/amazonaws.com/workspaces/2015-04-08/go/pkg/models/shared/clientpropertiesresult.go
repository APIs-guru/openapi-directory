package shared

type ClientPropertiesResult struct {
	ClientProperties *ClientProperties `json:"ClientProperties"`
	ResourceID       *string           `json:"ResourceId"`
}
