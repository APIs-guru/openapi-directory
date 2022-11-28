package shared

// GoogleCloudApigeeV1ListDataCollectorsResponse
// Response for ListDataCollectors.
type GoogleCloudApigeeV1ListDataCollectorsResponse struct {
	DataCollectors []GoogleCloudApigeeV1DataCollector `json:"dataCollectors,omitempty"`
	NextPageToken  *string                            `json:"nextPageToken,omitempty"`
}
