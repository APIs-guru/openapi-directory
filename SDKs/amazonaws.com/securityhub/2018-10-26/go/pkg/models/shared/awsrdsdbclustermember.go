package shared

type AwsRdsDbClusterMember struct {
	DbClusterParameterGroupStatus *string `json:"DbClusterParameterGroupStatus"`
	DbInstanceIdentifier          *string `json:"DbInstanceIdentifier"`
	IsClusterWriter               *bool   `json:"IsClusterWriter"`
	PromotionTier                 *int64  `json:"PromotionTier"`
}
