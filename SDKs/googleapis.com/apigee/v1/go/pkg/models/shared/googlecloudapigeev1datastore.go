package shared

type GoogleCloudApigeeV1Datastore struct {
	CreateTime      *string                             `json:"createTime"`
	DatastoreConfig *GoogleCloudApigeeV1DatastoreConfig `json:"datastoreConfig"`
	DisplayName     *string                             `json:"displayName"`
	LastUpdateTime  *string                             `json:"lastUpdateTime"`
	Org             *string                             `json:"org"`
	Self            *string                             `json:"self"`
	TargetType      *string                             `json:"targetType"`
}
