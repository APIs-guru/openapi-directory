package shared

type ImportDataSource struct {
	DataFormat DataFormatEnum `json:"DataFormat"`
	S3URL      string         `json:"S3Url"`
}
