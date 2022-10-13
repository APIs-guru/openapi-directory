package shared

type S3LogDelivery struct {
	Bucket  *string `json:"bucket"`
	Enabled bool    `json:"enabled"`
	Prefix  *string `json:"prefix"`
}
