package shared

type DatasetAccess struct {
	Dataset      *DatasetAccessEntry `json:"dataset,omitempty"`
	Domain       *string             `json:"domain,omitempty"`
	GroupByEmail *string             `json:"groupByEmail,omitempty"`
	IamMember    *string             `json:"iamMember,omitempty"`
	Role         *string             `json:"role,omitempty"`
	Routine      *RoutineReference   `json:"routine,omitempty"`
	SpecialGroup *string             `json:"specialGroup,omitempty"`
	UserByEmail  *string             `json:"userByEmail,omitempty"`
	View         *TableReference     `json:"view,omitempty"`
}

type DatasetTags struct {
	TagKey   *string `json:"tagKey,omitempty"`
	TagValue *string `json:"tagValue,omitempty"`
}

type Dataset struct {
	Access                         []DatasetAccess          `json:"access,omitempty"`
	CreationTime                   *string                  `json:"creationTime,omitempty"`
	DatasetReference               *DatasetReference        `json:"datasetReference,omitempty"`
	DefaultCollation               *string                  `json:"defaultCollation,omitempty"`
	DefaultEncryptionConfiguration *EncryptionConfiguration `json:"defaultEncryptionConfiguration,omitempty"`
	DefaultPartitionExpirationMs   *string                  `json:"defaultPartitionExpirationMs,omitempty"`
	DefaultTableExpirationMs       *string                  `json:"defaultTableExpirationMs,omitempty"`
	Description                    *string                  `json:"description,omitempty"`
	Etag                           *string                  `json:"etag,omitempty"`
	FriendlyName                   *string                  `json:"friendlyName,omitempty"`
	ID                             *string                  `json:"id,omitempty"`
	IsCaseInsensitive              *bool                    `json:"isCaseInsensitive,omitempty"`
	Kind                           *string                  `json:"kind,omitempty"`
	Labels                         map[string]string        `json:"labels,omitempty"`
	LastModifiedTime               *string                  `json:"lastModifiedTime,omitempty"`
	Location                       *string                  `json:"location,omitempty"`
	MaxTimeTravelHours             *string                  `json:"maxTimeTravelHours,omitempty"`
	SatisfiesPzs                   *bool                    `json:"satisfiesPzs,omitempty"`
	SelfLink                       *string                  `json:"selfLink,omitempty"`
	StorageBillingModel            *string                  `json:"storageBillingModel,omitempty"`
	Tags                           []DatasetTags            `json:"tags,omitempty"`
}
