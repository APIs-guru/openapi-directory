package shared



type AwsRdsDbClusterMember struct {
    DbClusterParameterGroupStatus *string `json:"DbClusterParameterGroupStatus,omitempty"`
    DbInstanceIdentifier *string `json:"DbInstanceIdentifier,omitempty"`
    IsClusterWriter *bool `json:"IsClusterWriter,omitempty"`
    PromotionTier *int64 `json:"PromotionTier,omitempty"`
    
}

