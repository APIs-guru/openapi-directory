package shared

// CustomPluginLocationDescription
// Information about the location of a custom plugin.
type CustomPluginLocationDescription struct {
	S3Location *S3LocationDescription `json:"s3Location,omitempty"`
}
