package shared

type KinesisFirehoseInputDescription struct {
	ResourceArn *string `json:"ResourceARN"`
	RoleArn     *string `json:"RoleARN"`
}
