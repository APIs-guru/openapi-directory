package shared

type KinesisFirehoseInputUpdate struct {
	ResourceArnUpdate *string `json:"ResourceARNUpdate"`
	RoleArnUpdate     *string `json:"RoleARNUpdate"`
}
