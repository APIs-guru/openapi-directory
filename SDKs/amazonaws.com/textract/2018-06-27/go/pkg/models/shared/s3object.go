package shared

type S3Object struct {
	Bucket  *string `json:"Bucket"`
	Name    *string `json:"Name"`
	Version *string `json:"Version"`
}
