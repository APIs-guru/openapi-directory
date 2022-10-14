package shared

type GoogleCloudApigeeV1OrganizationProjectMapping struct {
	Location     *string  `json:"location,omitempty"`
	Organization *string  `json:"organization,omitempty"`
	ProjectID    *string  `json:"projectId,omitempty"`
	ProjectIds   []string `json:"projectIds,omitempty"`
}
