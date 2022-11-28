package shared

// GoogleCloudApigeeV1DatastoreConfig
// Configuration detail for datastore
type GoogleCloudApigeeV1DatastoreConfig struct {
	BucketName  *string `json:"bucketName,omitempty"`
	DatasetName *string `json:"datasetName,omitempty"`
	Path        *string `json:"path,omitempty"`
	ProjectID   *string `json:"projectId,omitempty"`
	TablePrefix *string `json:"tablePrefix,omitempty"`
}
