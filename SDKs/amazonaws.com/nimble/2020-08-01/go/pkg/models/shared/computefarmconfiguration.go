package shared

// ComputeFarmConfiguration
// The configuration for a render farm that is associated with a studio resource.
type ComputeFarmConfiguration struct {
	ActiveDirectoryUser *string `json:"activeDirectoryUser,omitempty"`
	Endpoint            *string `json:"endpoint,omitempty"`
}
