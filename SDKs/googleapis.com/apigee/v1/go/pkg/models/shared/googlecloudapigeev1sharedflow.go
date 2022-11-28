package shared

// GoogleCloudApigeeV1SharedFlow
// The metadata describing a shared flow
type GoogleCloudApigeeV1SharedFlow struct {
	LatestRevisionID *string                            `json:"latestRevisionId,omitempty"`
	MetaData         *GoogleCloudApigeeV1EntityMetadata `json:"metaData,omitempty"`
	Name             *string                            `json:"name,omitempty"`
	Revision         []string                           `json:"revision,omitempty"`
}
