package shared

type ProvisioningJobCompletion struct {
	ID            *string  `json:"id,omitempty"`
	ResourceLinks []string `json:"resource_links,omitempty"`
}
