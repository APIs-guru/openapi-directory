package shared

type KinesisStreamsOutputDescription struct {
	ResourceArn *string `json:"ResourceARN"`
	RoleArn     *string `json:"RoleARN"`
}
