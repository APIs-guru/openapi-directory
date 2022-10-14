package shared

type EcsCluster struct {
	EcsClusterArn  *string `json:"EcsClusterArn,omitempty"`
	EcsClusterName *string `json:"EcsClusterName,omitempty"`
	RegisteredAt   *string `json:"RegisteredAt,omitempty"`
	StackID        *string `json:"StackId,omitempty"`
}
