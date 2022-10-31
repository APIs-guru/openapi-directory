package shared



type ListPermissionSetsProvisionedToAccountRequest struct {
    AccountID string `json:"AccountId"`
    InstanceArn string `json:"InstanceArn"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ProvisioningStatus *ProvisioningStatusEnum `json:"ProvisioningStatus,omitempty"`
    
}

