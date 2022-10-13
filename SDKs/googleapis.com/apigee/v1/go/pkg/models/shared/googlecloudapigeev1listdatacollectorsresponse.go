package shared

type GoogleCloudApigeeV1ListDataCollectorsResponse struct {
	DataCollectors []GoogleCloudApigeeV1DataCollector `json:"dataCollectors"`
	NextPageToken  *string                            `json:"nextPageToken"`
}
