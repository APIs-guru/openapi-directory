package shared

type ListStackInstancesForProvisionedProductOutput struct {
	NextPageToken  *string         `json:"NextPageToken,omitempty"`
	StackInstances []StackInstance `json:"StackInstances,omitempty"`
}
