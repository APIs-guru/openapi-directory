package shared

// GoogleCloudApigeeV1ArchiveDeployment
// Archive Deployment information.
type GoogleCloudApigeeV1ArchiveDeployment struct {
	CreatedAt *string           `json:"createdAt,omitempty"`
	GcsURI    *string           `json:"gcsUri,omitempty"`
	Labels    map[string]string `json:"labels,omitempty"`
	Name      *string           `json:"name,omitempty"`
	Operation *string           `json:"operation,omitempty"`
	UpdatedAt *string           `json:"updatedAt,omitempty"`
}

// GoogleCloudApigeeV1ArchiveDeploymentInput
// Archive Deployment information.
type GoogleCloudApigeeV1ArchiveDeploymentInput struct {
	GcsURI *string           `json:"gcsUri,omitempty"`
	Labels map[string]string `json:"labels,omitempty"`
	Name   *string           `json:"name,omitempty"`
}
