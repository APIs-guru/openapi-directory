package shared

type AwsLambdaLayerVersionDetails struct {
	CompatibleRuntimes []string `json:"CompatibleRuntimes"`
	CreatedDate        *string  `json:"CreatedDate"`
	Version            *int64   `json:"Version"`
}
