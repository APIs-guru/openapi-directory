package shared

// AppSpecification
// Configuration to run a processing job in a specified container image.
type AppSpecification struct {
	ContainerArguments  []string `json:"ContainerArguments,omitempty"`
	ContainerEntrypoint []string `json:"ContainerEntrypoint,omitempty"`
	ImageURI            string   `json:"ImageUri"`
}
