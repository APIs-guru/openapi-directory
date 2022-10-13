package shared

type S3Tag struct {
	ID          *int64  `json:"id"`
	IsMandatory *bool   `json:"isMandatory"`
	Key         *string `json:"key"`
	Value       *string `json:"value"`
}
