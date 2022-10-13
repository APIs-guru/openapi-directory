package shared

type KinesisStreamsOutputUpdate struct {
	ResourceArnUpdate *string `json:"ResourceARNUpdate"`
	RoleArnUpdate     *string `json:"RoleARNUpdate"`
}
