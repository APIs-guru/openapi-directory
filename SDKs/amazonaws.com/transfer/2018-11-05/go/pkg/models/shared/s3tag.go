package shared

// S3Tag
// Specifies the key-value pair that are assigned to a file during the execution of a Tagging step.
type S3Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
