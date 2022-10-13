package shared

type RegisterEcsClusterRequest struct {
	EcsClusterArn string `json:"EcsClusterArn"`
	StackID       string `json:"StackId"`
}
