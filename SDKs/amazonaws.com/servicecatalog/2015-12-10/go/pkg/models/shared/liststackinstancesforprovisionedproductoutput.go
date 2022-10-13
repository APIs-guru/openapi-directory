package shared

type ListStackInstancesForProvisionedProductOutput struct {
	NextPageToken  *string         `json:"NextPageToken"`
	StackInstances []StackInstance `json:"StackInstances"`
}
