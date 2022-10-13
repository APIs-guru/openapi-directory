package shared

type TagStepDetails struct {
	Name *string `json:"Name"`
	Tags []S3Tag `json:"Tags"`
}
