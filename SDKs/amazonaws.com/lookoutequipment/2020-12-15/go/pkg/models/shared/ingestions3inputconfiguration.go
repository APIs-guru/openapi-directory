package shared

type IngestionS3InputConfiguration struct {
	Bucket string  `json:"Bucket"`
	Prefix *string `json:"Prefix"`
}
