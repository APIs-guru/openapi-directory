package shared

import (
"time")

type FeatureGroup struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    EventTimeFeatureName *string `json:"EventTimeFeatureName,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    FeatureDefinitions []FeatureDefinition `json:"FeatureDefinitions,omitempty"`
    FeatureGroupArn *string `json:"FeatureGroupArn,omitempty"`
    FeatureGroupName *string `json:"FeatureGroupName,omitempty"`
    FeatureGroupStatus *FeatureGroupStatusEnum `json:"FeatureGroupStatus,omitempty"`
    OfflineStoreConfig *OfflineStoreConfig `json:"OfflineStoreConfig,omitempty"`
    OfflineStoreStatus *OfflineStoreStatus `json:"OfflineStoreStatus,omitempty"`
    OnlineStoreConfig *OnlineStoreConfig `json:"OnlineStoreConfig,omitempty"`
    RecordIdentifierFeatureName *string `json:"RecordIdentifierFeatureName,omitempty"`
    RoleArn *string `json:"RoleArn,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

