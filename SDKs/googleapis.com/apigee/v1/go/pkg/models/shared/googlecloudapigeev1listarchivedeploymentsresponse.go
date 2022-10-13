package shared

type GoogleCloudApigeeV1ListArchiveDeploymentsResponse struct {
	ArchiveDeployments []GoogleCloudApigeeV1ArchiveDeployment `json:"archiveDeployments"`
	NextPageToken      *string                                `json:"nextPageToken"`
}
