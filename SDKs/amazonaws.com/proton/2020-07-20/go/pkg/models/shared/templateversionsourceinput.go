package shared

// TemplateVersionSourceInput
// Template version source data.
type TemplateVersionSourceInput struct {
	S3 *S3ObjectSource `json:"s3,omitempty"`
}
