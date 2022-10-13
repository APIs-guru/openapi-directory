package shared

type GoogleCloudApigeeV1ListKeyValueEntriesResponse struct {
	KeyValueEntries []GoogleCloudApigeeV1KeyValueEntry `json:"keyValueEntries"`
	NextPageToken   *string                            `json:"nextPageToken"`
}
