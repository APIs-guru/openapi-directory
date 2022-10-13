package shared

type S3LogDeliveryDescription struct {
	Bucket  *string `json:"bucket"`
	Enabled *bool   `json:"enabled"`
	Prefix  *string `json:"prefix"`
}
