package shared

type KinesisStreamsInputUpdate struct {
	ResourceArnUpdate *string `json:"ResourceARNUpdate"`
	RoleArnUpdate     *string `json:"RoleARNUpdate"`
}
