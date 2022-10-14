package shared

import (
	"time"
)

type DescribeFeatureGroupResponse struct {
	CreationTime                time.Time               `json:"CreationTime"`
	Description                 *string                 `json:"Description,omitempty"`
	EventTimeFeatureName        string                  `json:"EventTimeFeatureName"`
	FailureReason               *string                 `json:"FailureReason,omitempty"`
	FeatureDefinitions          []FeatureDefinition     `json:"FeatureDefinitions"`
	FeatureGroupArn             string                  `json:"FeatureGroupArn"`
	FeatureGroupName            string                  `json:"FeatureGroupName"`
	FeatureGroupStatus          *FeatureGroupStatusEnum `json:"FeatureGroupStatus,omitempty"`
	NextToken                   string                  `json:"NextToken"`
	OfflineStoreConfig          *OfflineStoreConfig     `json:"OfflineStoreConfig,omitempty"`
	OfflineStoreStatus          *OfflineStoreStatus     `json:"OfflineStoreStatus,omitempty"`
	OnlineStoreConfig           *OnlineStoreConfig      `json:"OnlineStoreConfig,omitempty"`
	RecordIdentifierFeatureName string                  `json:"RecordIdentifierFeatureName"`
	RoleArn                     *string                 `json:"RoleArn,omitempty"`
}
