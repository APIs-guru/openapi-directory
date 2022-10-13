package shared

type ListAccountAssignmentCreationStatusRequest struct {
	Filter      *OperationStatusFilter `json:"Filter"`
	InstanceArn string                 `json:"InstanceArn"`
	MaxResults  *int64                 `json:"MaxResults"`
	NextToken   *string                `json:"NextToken"`
}
