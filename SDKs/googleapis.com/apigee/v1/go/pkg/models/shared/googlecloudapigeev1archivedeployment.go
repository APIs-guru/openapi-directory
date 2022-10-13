package shared

type GoogleCloudApigeeV1ArchiveDeployment struct {
	CreatedAt *string           `json:"createdAt"`
	GcsURI    *string           `json:"gcsUri"`
	Labels    map[string]string `json:"labels"`
	Name      *string           `json:"name"`
	Operation *string           `json:"operation"`
	UpdatedAt *string           `json:"updatedAt"`
}
