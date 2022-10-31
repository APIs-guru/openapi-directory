package shared

type Layer struct {
	Arn                      *string `json:"Arn,omitempty"`
	CodeSize                 *int64  `json:"CodeSize,omitempty"`
	SigningJobArn            *string `json:"SigningJobArn,omitempty"`
	SigningProfileVersionArn *string `json:"SigningProfileVersionArn,omitempty"`
}
