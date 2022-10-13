package shared

type GoogleCloudApigeeV1ListInstancesResponse struct {
	Instances     []GoogleCloudApigeeV1Instance `json:"instances"`
	NextPageToken *string                       `json:"nextPageToken"`
}
