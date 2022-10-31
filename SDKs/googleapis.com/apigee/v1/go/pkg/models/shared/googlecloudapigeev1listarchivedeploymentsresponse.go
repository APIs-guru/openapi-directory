package shared

type GoogleCloudApigeeV1ListArchiveDeploymentsResponse struct {
	ArchiveDeployments []GoogleCloudApigeeV1ArchiveDeployment `json:"archiveDeployments,omitempty"`
	NextPageToken      *string                                `json:"nextPageToken,omitempty"`
}
