package shared

type S3Tag struct {
	ID          *int64  `json:"id,omitempty"`
	IsMandatory *bool   `json:"isMandatory,omitempty"`
	Key         *string `json:"key,omitempty"`
	Value       *string `json:"value,omitempty"`
}
