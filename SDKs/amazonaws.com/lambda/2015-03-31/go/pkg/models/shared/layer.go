package shared

type Layer struct {
	Arn                      *string `json:"Arn"`
	CodeSize                 *int64  `json:"CodeSize"`
	SigningJobArn            *string `json:"SigningJobArn"`
	SigningProfileVersionArn *string `json:"SigningProfileVersionArn"`
}
