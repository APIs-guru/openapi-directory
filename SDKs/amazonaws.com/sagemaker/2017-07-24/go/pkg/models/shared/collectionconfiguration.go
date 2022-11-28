package shared

// CollectionConfiguration
// Configuration information for the Debugger output tensor collections.
type CollectionConfiguration struct {
	CollectionName       *string           `json:"CollectionName,omitempty"`
	CollectionParameters map[string]string `json:"CollectionParameters,omitempty"`
}
