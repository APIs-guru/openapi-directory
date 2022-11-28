package shared

// ClientPropertiesResult
// Information about the Amazon WorkSpaces client.
type ClientPropertiesResult struct {
	ClientProperties *ClientProperties `json:"ClientProperties,omitempty"`
	ResourceID       *string           `json:"ResourceId,omitempty"`
}
