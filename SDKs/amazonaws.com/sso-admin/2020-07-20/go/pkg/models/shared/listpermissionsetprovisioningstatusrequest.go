package shared

type ListPermissionSetProvisioningStatusRequest struct {
	Filter      *OperationStatusFilter `json:"Filter,omitempty"`
	InstanceArn string                 `json:"InstanceArn"`
	MaxResults  *int64                 `json:"MaxResults,omitempty"`
	NextToken   *string                `json:"NextToken,omitempty"`
}
