package shared

// ImportDataSource
// An object that contains details about the data source of the import job.
type ImportDataSource struct {
	DataFormat DataFormatEnum `json:"DataFormat"`
	S3URL      string         `json:"S3Url"`
}
