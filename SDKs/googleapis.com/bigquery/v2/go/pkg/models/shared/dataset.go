package shared

type DatasetAccess struct {
	Dataset      *DatasetAccessEntry `json:"dataset"`
	Domain       *string             `json:"domain"`
	GroupByEmail *string             `json:"groupByEmail"`
	IamMember    *string             `json:"iamMember"`
	Role         *string             `json:"role"`
	Routine      *RoutineReference   `json:"routine"`
	SpecialGroup *string             `json:"specialGroup"`
	UserByEmail  *string             `json:"userByEmail"`
	View         *TableReference     `json:"view"`
}

type DatasetTags struct {
	TagKey   *string `json:"tagKey"`
	TagValue *string `json:"tagValue"`
}

type Dataset struct {
	Access                         []DatasetAccess          `json:"access"`
	CreationTime                   *string                  `json:"creationTime"`
	DatasetReference               *DatasetReference        `json:"datasetReference"`
	DefaultCollation               *string                  `json:"defaultCollation"`
	DefaultEncryptionConfiguration *EncryptionConfiguration `json:"defaultEncryptionConfiguration"`
	DefaultPartitionExpirationMs   *string                  `json:"defaultPartitionExpirationMs"`
	DefaultTableExpirationMs       *string                  `json:"defaultTableExpirationMs"`
	Description                    *string                  `json:"description"`
	Etag                           *string                  `json:"etag"`
	FriendlyName                   *string                  `json:"friendlyName"`
	ID                             *string                  `json:"id"`
	IsCaseInsensitive              *bool                    `json:"isCaseInsensitive"`
	Kind                           *string                  `json:"kind"`
	Labels                         map[string]string        `json:"labels"`
	LastModifiedTime               *string                  `json:"lastModifiedTime"`
	Location                       *string                  `json:"location"`
	MaxTimeTravelHours             *string                  `json:"maxTimeTravelHours"`
	SatisfiesPzs                   *bool                    `json:"satisfiesPzs"`
	SelfLink                       *string                  `json:"selfLink"`
	Tags                           []DatasetTags            `json:"tags"`
}
