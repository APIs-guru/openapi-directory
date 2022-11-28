package shared

// S3LogDelivery
// Details about delivering logs to Amazon S3.
type S3LogDelivery struct {
	Bucket  *string `json:"bucket,omitempty"`
	Enabled bool    `json:"enabled"`
	Prefix  *string `json:"prefix,omitempty"`
}
