package shared

type KinesisFirehoseOutputUpdate struct {
	ResourceArnUpdate *string `json:"ResourceARNUpdate"`
	RoleArnUpdate     *string `json:"RoleARNUpdate"`
}
