package shared

type CreateFeatureGroupRequest struct {
	Description                 *string             `json:"Description,omitempty"`
	EventTimeFeatureName        string              `json:"EventTimeFeatureName"`
	FeatureDefinitions          []FeatureDefinition `json:"FeatureDefinitions"`
	FeatureGroupName            string              `json:"FeatureGroupName"`
	OfflineStoreConfig          *OfflineStoreConfig `json:"OfflineStoreConfig,omitempty"`
	OnlineStoreConfig           *OnlineStoreConfig  `json:"OnlineStoreConfig,omitempty"`
	RecordIdentifierFeatureName string              `json:"RecordIdentifierFeatureName"`
	RoleArn                     *string             `json:"RoleArn,omitempty"`
	Tags                        []Tag               `json:"Tags,omitempty"`
}
