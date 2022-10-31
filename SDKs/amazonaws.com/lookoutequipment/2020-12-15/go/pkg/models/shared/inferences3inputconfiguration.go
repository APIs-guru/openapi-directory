package shared

type InferenceS3InputConfiguration struct {
	Bucket string  `json:"Bucket"`
	Prefix *string `json:"Prefix,omitempty"`
}
