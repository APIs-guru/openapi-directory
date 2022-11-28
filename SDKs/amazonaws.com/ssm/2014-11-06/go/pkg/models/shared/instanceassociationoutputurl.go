package shared

// InstanceAssociationOutputURL
// The URL of S3 bucket where you want to store the results of this request.
type InstanceAssociationOutputURL struct {
	S3OutputURL *S3OutputURL `json:"S3OutputUrl,omitempty"`
}
