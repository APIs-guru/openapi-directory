package shared

type EcsCluster struct {
	EcsClusterArn  *string `json:"EcsClusterArn"`
	EcsClusterName *string `json:"EcsClusterName"`
	RegisteredAt   *string `json:"RegisteredAt"`
	StackID        *string `json:"StackId"`
}
