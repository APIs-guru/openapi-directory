package shared

type InputConfig struct {
	DataInputConfig  string        `json:"DataInputConfig"`
	Framework        FrameworkEnum `json:"Framework"`
	FrameworkVersion *string       `json:"FrameworkVersion,omitempty"`
	S3URI            string        `json:"S3Uri"`
}
