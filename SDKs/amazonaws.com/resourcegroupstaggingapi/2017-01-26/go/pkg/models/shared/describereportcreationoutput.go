package shared

type DescribeReportCreationOutput struct {
	ErrorMessage *string `json:"ErrorMessage"`
	S3Location   *string `json:"S3Location"`
	Status       *string `json:"Status"`
}
