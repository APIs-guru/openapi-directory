package shared

import (
"time")

type FeatureGroupSummary struct {
    CreationTime time.Time `json:"CreationTime"`
    FeatureGroupArn string `json:"FeatureGroupArn"`
    FeatureGroupName string `json:"FeatureGroupName"`
    FeatureGroupStatus *FeatureGroupStatusEnum `json:"FeatureGroupStatus,omitempty"`
    OfflineStoreStatus *OfflineStoreStatus `json:"OfflineStoreStatus,omitempty"`
    
}

