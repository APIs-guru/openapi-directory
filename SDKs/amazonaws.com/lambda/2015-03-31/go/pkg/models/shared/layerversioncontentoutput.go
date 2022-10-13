package shared

type LayerVersionContentOutput struct {
	CodeSha256               *string `json:"CodeSha256"`
	CodeSize                 *int64  `json:"CodeSize"`
	Location                 *string `json:"Location"`
	SigningJobArn            *string `json:"SigningJobArn"`
	SigningProfileVersionArn *string `json:"SigningProfileVersionArn"`
}
