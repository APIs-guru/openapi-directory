package shared

type ListResourcesInProtectionGroupRequest struct {
	MaxResults        *int64  `json:"MaxResults"`
	NextToken         *string `json:"NextToken"`
	ProtectionGroupID string  `json:"ProtectionGroupId"`
}
