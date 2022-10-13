package shared

type GoogleCloudApigeeV1DatastoreConfig struct {
	BucketName  *string `json:"bucketName"`
	DatasetName *string `json:"datasetName"`
	Path        *string `json:"path"`
	ProjectID   *string `json:"projectId"`
	TablePrefix *string `json:"tablePrefix"`
}
