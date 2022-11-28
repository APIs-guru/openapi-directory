package shared

// LabelsInputConfiguration
// Contains the configuration information for the S3 location being used to hold label data.
type LabelsInputConfiguration struct {
	S3InputConfiguration LabelsS3InputConfiguration `json:"S3InputConfiguration"`
}
