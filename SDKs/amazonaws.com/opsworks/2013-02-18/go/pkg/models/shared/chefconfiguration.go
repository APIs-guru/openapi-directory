package shared

// ChefConfiguration
// Describes the Chef configuration.
type ChefConfiguration struct {
	BerkshelfVersion *string `json:"BerkshelfVersion,omitempty"`
	ManageBerkshelf  *bool   `json:"ManageBerkshelf,omitempty"`
}
