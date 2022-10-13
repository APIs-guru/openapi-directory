package shared

type CreateFeatureGroupRequest struct {
	Description                 *string             `json:"Description"`
	EventTimeFeatureName        string              `json:"EventTimeFeatureName"`
	FeatureDefinitions          []FeatureDefinition `json:"FeatureDefinitions"`
	FeatureGroupName            string              `json:"FeatureGroupName"`
	OfflineStoreConfig          *OfflineStoreConfig `json:"OfflineStoreConfig"`
	OnlineStoreConfig           *OnlineStoreConfig  `json:"OnlineStoreConfig"`
	RecordIdentifierFeatureName string              `json:"RecordIdentifierFeatureName"`
	RoleArn                     *string             `json:"RoleArn"`
	Tags                        []Tag               `json:"Tags"`
}
