package shared

// LayerVersionContentOutput
// Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
type LayerVersionContentOutput struct {
	CodeSha256               *string `json:"CodeSha256,omitempty"`
	CodeSize                 *int64  `json:"CodeSize,omitempty"`
	Location                 *string `json:"Location,omitempty"`
	SigningJobArn            *string `json:"SigningJobArn,omitempty"`
	SigningProfileVersionArn *string `json:"SigningProfileVersionArn,omitempty"`
}
