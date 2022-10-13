package shared

type ListPermissionSetsProvisionedToAccountRequest struct {
	AccountID          string                  `json:"AccountId"`
	InstanceArn        string                  `json:"InstanceArn"`
	MaxResults         *int64                  `json:"MaxResults"`
	NextToken          *string                 `json:"NextToken"`
	ProvisioningStatus *ProvisioningStatusEnum `json:"ProvisioningStatus"`
}
