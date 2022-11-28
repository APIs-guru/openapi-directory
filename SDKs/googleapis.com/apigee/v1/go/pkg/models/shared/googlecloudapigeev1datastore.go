package shared

// GoogleCloudApigeeV1Datastore
// The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
type GoogleCloudApigeeV1Datastore struct {
	CreateTime      *string                             `json:"createTime,omitempty"`
	DatastoreConfig *GoogleCloudApigeeV1DatastoreConfig `json:"datastoreConfig,omitempty"`
	DisplayName     *string                             `json:"displayName,omitempty"`
	LastUpdateTime  *string                             `json:"lastUpdateTime,omitempty"`
	Org             *string                             `json:"org,omitempty"`
	Self            *string                             `json:"self,omitempty"`
	TargetType      *string                             `json:"targetType,omitempty"`
}

// GoogleCloudApigeeV1DatastoreInput
// The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
type GoogleCloudApigeeV1DatastoreInput struct {
	DatastoreConfig *GoogleCloudApigeeV1DatastoreConfig `json:"datastoreConfig,omitempty"`
	DisplayName     *string                             `json:"displayName,omitempty"`
	TargetType      *string                             `json:"targetType,omitempty"`
}
