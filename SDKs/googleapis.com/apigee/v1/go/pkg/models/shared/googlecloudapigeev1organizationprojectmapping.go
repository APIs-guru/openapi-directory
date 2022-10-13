package shared

type GoogleCloudApigeeV1OrganizationProjectMapping struct {
	Location     *string  `json:"location"`
	Organization *string  `json:"organization"`
	ProjectID    *string  `json:"projectId"`
	ProjectIds   []string `json:"projectIds"`
}
