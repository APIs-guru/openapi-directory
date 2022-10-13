package shared

type ModifyClientPropertiesRequest struct {
	ClientProperties ClientProperties `json:"ClientProperties"`
	ResourceID       string           `json:"ResourceId"`
}
