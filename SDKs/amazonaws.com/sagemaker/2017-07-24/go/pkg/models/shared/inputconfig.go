package shared

// InputConfig
// Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
type InputConfig struct {
	DataInputConfig  string        `json:"DataInputConfig"`
	Framework        FrameworkEnum `json:"Framework"`
	FrameworkVersion *string       `json:"FrameworkVersion,omitempty"`
	S3URI            string        `json:"S3Uri"`
}
