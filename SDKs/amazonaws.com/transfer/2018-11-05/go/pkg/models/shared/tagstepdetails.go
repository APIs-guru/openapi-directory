package shared

// TagStepDetails
// <p>Each step type has its own <code>StepDetails</code> structure.</p> <p>The key/value pairs used to tag a file during the execution of a workflow step.</p>
type TagStepDetails struct {
	Name *string `json:"Name,omitempty"`
	Tags []S3Tag `json:"Tags,omitempty"`
}
