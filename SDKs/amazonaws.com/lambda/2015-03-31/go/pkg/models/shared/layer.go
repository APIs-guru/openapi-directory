package shared

// Layer
// An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
type Layer struct {
	Arn                      *string `json:"Arn,omitempty"`
	CodeSize                 *int64  `json:"CodeSize,omitempty"`
	SigningJobArn            *string `json:"SigningJobArn,omitempty"`
	SigningProfileVersionArn *string `json:"SigningProfileVersionArn,omitempty"`
}
