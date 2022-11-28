package shared

// AwsLambdaLayerVersionDetails
// Details about a Lambda layer version.
type AwsLambdaLayerVersionDetails struct {
	CompatibleRuntimes []string `json:"CompatibleRuntimes,omitempty"`
	CreatedDate        *string  `json:"CreatedDate,omitempty"`
	Version            *int64   `json:"Version,omitempty"`
}
