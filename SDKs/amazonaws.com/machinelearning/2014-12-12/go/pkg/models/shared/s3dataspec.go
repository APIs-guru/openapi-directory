package shared

type S3DataSpec struct {
	DataLocationS3       string  `json:"DataLocationS3"`
	DataRearrangement    *string `json:"DataRearrangement"`
	DataSchema           *string `json:"DataSchema"`
	DataSchemaLocationS3 *string `json:"DataSchemaLocationS3"`
}
