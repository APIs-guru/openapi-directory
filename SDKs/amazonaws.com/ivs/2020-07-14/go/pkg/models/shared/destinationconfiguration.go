package shared

// DestinationConfiguration
// A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
type DestinationConfiguration struct {
	S3 *S3DestinationConfiguration `json:"s3,omitempty"`
}
