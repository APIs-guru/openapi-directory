package shared

type AppSpecification struct {
	ContainerArguments  []string `json:"ContainerArguments"`
	ContainerEntrypoint []string `json:"ContainerEntrypoint"`
	ImageURI            string   `json:"ImageUri"`
}
