package shared

import (
	"time"
)

type FeatureGroup struct {
	CreationTime                *time.Time              `json:"CreationTime"`
	Description                 *string                 `json:"Description"`
	EventTimeFeatureName        *string                 `json:"EventTimeFeatureName"`
	FailureReason               *string                 `json:"FailureReason"`
	FeatureDefinitions          []FeatureDefinition     `json:"FeatureDefinitions"`
	FeatureGroupArn             *string                 `json:"FeatureGroupArn"`
	FeatureGroupName            *string                 `json:"FeatureGroupName"`
	FeatureGroupStatus          *FeatureGroupStatusEnum `json:"FeatureGroupStatus"`
	OfflineStoreConfig          *OfflineStoreConfig     `json:"OfflineStoreConfig"`
	OfflineStoreStatus          *OfflineStoreStatus     `json:"OfflineStoreStatus"`
	OnlineStoreConfig           *OnlineStoreConfig      `json:"OnlineStoreConfig"`
	RecordIdentifierFeatureName *string                 `json:"RecordIdentifierFeatureName"`
	RoleArn                     *string                 `json:"RoleArn"`
	Tags                        []Tag                   `json:"Tags"`
}
