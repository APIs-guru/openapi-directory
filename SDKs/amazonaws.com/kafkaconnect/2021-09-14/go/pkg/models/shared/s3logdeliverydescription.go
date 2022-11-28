package shared

// S3LogDeliveryDescription
// The description of the details about delivering logs to Amazon S3.
type S3LogDeliveryDescription struct {
	Bucket  *string `json:"bucket,omitempty"`
	Enabled *bool   `json:"enabled,omitempty"`
	Prefix  *string `json:"prefix,omitempty"`
}
