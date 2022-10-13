package shared

type AwsCodeBuildProjectSource struct {
	GitCloneDepth *int64  `json:"GitCloneDepth"`
	InsecureSsl   *bool   `json:"InsecureSsl"`
	Location      *string `json:"Location"`
	Type          *string `json:"Type"`
}
