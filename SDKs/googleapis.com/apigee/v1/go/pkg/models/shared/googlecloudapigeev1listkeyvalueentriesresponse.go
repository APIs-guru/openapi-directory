package shared

// GoogleCloudApigeeV1ListKeyValueEntriesResponse
// The request structure for listing key value map keys and its corresponding values.
type GoogleCloudApigeeV1ListKeyValueEntriesResponse struct {
	KeyValueEntries []GoogleCloudApigeeV1KeyValueEntry `json:"keyValueEntries,omitempty"`
	NextPageToken   *string                            `json:"nextPageToken,omitempty"`
}
