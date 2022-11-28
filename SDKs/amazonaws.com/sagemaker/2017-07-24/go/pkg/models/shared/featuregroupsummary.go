package shared

import (
	"time"
)

// FeatureGroupSummary
// The name, Arn, <code>CreationTime</code>, <code>FeatureGroup</code> values, <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a <code>FeatureGroup</code>.
type FeatureGroupSummary struct {
	CreationTime       time.Time               `json:"CreationTime"`
	FeatureGroupArn    string                  `json:"FeatureGroupArn"`
	FeatureGroupName   string                  `json:"FeatureGroupName"`
	FeatureGroupStatus *FeatureGroupStatusEnum `json:"FeatureGroupStatus,omitempty"`
	OfflineStoreStatus *OfflineStoreStatus     `json:"OfflineStoreStatus,omitempty"`
}
