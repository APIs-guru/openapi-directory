package shared

type GoogleCloudApigeeV1SharedFlow struct {
	LatestRevisionID *string                            `json:"latestRevisionId"`
	MetaData         *GoogleCloudApigeeV1EntityMetadata `json:"metaData"`
	Name             *string                            `json:"name"`
	Revision         []string                           `json:"revision"`
}
